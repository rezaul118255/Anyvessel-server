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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const user_service_1 = require("./user.service");
const sendResponse_1 = require("../../../shared/sendResponse");
const http_status_1 = __importDefault(require("http-status"));
const pick_1 = __importDefault(require("../../../shared/pick"));
// create user
const createUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = req.body;
    const result = yield user_service_1.userService.createUser(userData);
    const _a = result.toObject(), { password } = _a, others = __rest(_a, ["password"]);
    sendResponse_1.responseForData.sendResponseForCreate(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'User created Successful',
        data: others,
    });
}));
// get all user
const getAllUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const paginationOption = (0, pick_1.default)(req.query, [
        'limit',
        'page',
        'sortBy',
        'sortOrder',
    ]);
    const result = yield user_service_1.userService.getAllUser(paginationOption);
    sendResponse_1.responseForData.sendResponse(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: ' Getting Successful',
        data: result.data,
        meta: result.meta,
    });
}));
// get single user
const getSingleUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield user_service_1.userService.getSingleUser(id);
    sendResponse_1.responseForData.sendResponseForCreate(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: ' Getting Successful',
        data: result,
    });
}));
// update user
const updateUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const travelData = req.body;
    const result = yield user_service_1.userService.updateUser(id, travelData);
    sendResponse_1.responseForData.sendResponseForCreate(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'User data Update Successful',
        data: result,
    });
}));
// delete user
const deleteUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield user_service_1.userService.deleteUser(id);
    sendResponse_1.responseForData.sendResponseForCreate(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: ' Delete Successful',
        data: result,
    });
}));
exports.userController = {
    createUser,
    getAllUser,
    getSingleUser,
    updateUser,
    deleteUser,
};
