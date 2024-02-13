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
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogService = void 0;
const blog_model_1 = require("./blog.model");
const createBlog = (blog) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blog_model_1.Blog.create(blog);
    return result;
});
// get all user
const getAllBlog = (paginationOption) => __awaiter(void 0, void 0, void 0, function* () {
    // this is for pagination
    const { page = 1, limit = 10 } = paginationOption;
    const skip = (page - 1) * limit;
    const result = yield blog_model_1.Blog.find()
        .sort({
        createdAt: 'desc',
    })
        .skip(skip)
        .limit(limit);
    const total = yield blog_model_1.Blog.countDocuments();
    return {
        meta: {
            page,
            limit,
            total,
        },
        data: result,
    };
});
// get single blog
const getSingleBLog = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blog_model_1.Blog.findById(id);
    return result;
});
const updateBlog = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blog_model_1.Blog.findByIdAndUpdate({ _id: id }, { $set: Object.assign({}, payload) }, { new: true });
    return result;
});
const deleteBlog = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blog_model_1.Blog.findByIdAndDelete(id);
    return result;
});
const createComment = (comment, id) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(comment, id);
    console.log('***********************');
    const result = yield blog_model_1.Blog.findByIdAndUpdate(id, { comments: comment }, { new: true });
    return result;
});
const UnComment = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blog_model_1.Blog.findByIdAndUpdate(id, { comments: "" }, { new: true });
    return result;
});
exports.blogService = {
    createBlog,
    getAllBlog,
    getSingleBLog,
    updateBlog,
    deleteBlog,
    createComment,
    UnComment
};
