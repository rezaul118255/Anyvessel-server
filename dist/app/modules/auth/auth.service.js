"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jwtToken_1 = require("../../../shared/jwtToken");
const config_1 = __importDefault(require("../../../config"));
const crew_model_1 = require("../crew/crew.model");
// login user
const loginUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = payload;
    // check user existance
    const isUserExist = yield crew_model_1.Crew.findOne({ email }, { email: 1, password: 1, role: 1 }).lean();
    if (!isUserExist) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "User doesn't exist");
    }
    //check matched password
    const isPasswordMatched = yield bcryptjs_1.default.compare(password, isUserExist === null || isUserExist === void 0 ? void 0 : isUserExist.password);
    // check password
    if (!isPasswordMatched) {
        throw new ApiError_1.default(http_status_1.default.UNAUTHORIZED, "Password isn't matched");
    }
    const { email: userEmail, role } = isUserExist;
    // create access token
    const accessToken = jwtToken_1.jwtToken.createToken({ userEmail, role }, config_1.default.jwt_secret, { expiresIn: config_1.default.jwt_expires_in });
    // create refresh token
    const refreshToken = jwtToken_1.jwtToken.createToken({ userEmail, role }, config_1.default.jwt_refresh_token, { expiresIn: config_1.default.jwt_refresh_expires_in });
    return {
        accessToken,
        refreshToken,
    };
});
exports.authService = {
    loginUser,
};
