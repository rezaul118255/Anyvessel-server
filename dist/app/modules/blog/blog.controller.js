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
exports.blogController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const blog_service_1 = require("./blog.service");
const sendResponse_1 = require("../../../shared/sendResponse");
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const pick_1 = __importDefault(require("../../../shared/pick"));
const createBlog = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const blogData = req.body;
    if (!blogData) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'pleas try again');
    }
    const result = yield blog_service_1.blogService.createBlog(blogData);
    sendResponse_1.responseForData.sendResponseForCreate(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'User created Successful',
        data: result,
    });
}));
// get all blog
const getAllBlog = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const paginationOption = (0, pick_1.default)(req.query, [
        'limit',
        'page',
        'sortBy',
        'sortOrder',
    ]);
    const result = yield blog_service_1.blogService.getAllBlog(paginationOption);
    sendResponse_1.responseForData.sendResponse(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: ' Getting Successful',
        data: result.data,
        meta: result.meta,
    });
}));
// get single blog
const getSingleBlog = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    if (!id) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'id is not found');
    }
    const result = yield blog_service_1.blogService.getSingleBLog(id);
    sendResponse_1.responseForData.sendResponseForCreate(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Getting Successful',
        data: result,
    });
}));
const updateBlog = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const travelData = req.body;
    const result = yield blog_service_1.blogService.updateBlog(id, travelData);
    sendResponse_1.responseForData.sendResponseForCreate(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Blog data Update Successful',
        data: result,
    });
}));
const deleteBlog = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield blog_service_1.blogService.deleteBlog(id);
    sendResponse_1.responseForData.sendResponseForCreate(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: ' Delete Successful',
        data: result,
    });
}));
const createComments = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const comment = req.body.comment;
    const id = req.params.id;
    const result = yield blog_service_1.blogService.createComment(comment, id);
    sendResponse_1.responseForData.sendResponseForCreate(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'User created Successful',
        data: result,
    });
}));
const UnComment = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield blog_service_1.blogService.UnComment(id);
    sendResponse_1.responseForData.sendResponseForCreate(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'User created Successful',
        data: result,
    });
}));
exports.blogController = {
    createBlog,
    getAllBlog,
    getSingleBlog,
    updateBlog,
    deleteBlog,
    createComments,
    UnComment
};
