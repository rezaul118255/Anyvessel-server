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
exports.userService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const user_model_1 = require("./user.model");
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
// create a user
const createUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    // create user for one time
    const isExistUser = yield user_model_1.User.findOne({
        email: user.email,
    });
    if (isExistUser) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'User is already exist');
    }
    const result = yield user_model_1.User.create(user);
    return result;
});
// get all user
const getAllUser = (paginationOption) => __awaiter(void 0, void 0, void 0, function* () {
    // this is for pagination
    const { page = 1, limit = 10 } = paginationOption;
    const skip = (page - 1) * limit;
    const result = yield user_model_1.User.find()
        .sort({
        createdAt: 'desc',
    })
        .skip(skip)
        .limit(limit);
    const total = yield user_model_1.User.countDocuments();
    return {
        meta: {
            page,
            limit,
            total,
        },
        data: result,
    };
});
// get single user
const getSingleUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.User.findById(id);
    return result;
});
// update user
const updateUser = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.User.findOneAndUpdate({ _id: id }, { $set: Object.assign(Object.assign({}, payload), { email: undefined }) }, { new: true });
    return result;
});
// delete user
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.User.findByIdAndDelete(id);
    return result;
});
exports.userService = {
    createUser,
    getAllUser,
    getSingleUser,
    updateUser,
    deleteUser,
};
