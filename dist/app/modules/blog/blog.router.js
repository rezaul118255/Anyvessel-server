"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogRouter = void 0;
const express_1 = __importDefault(require("express"));
const blog_controller_1 = require("./blog.controller");
const router = express_1.default.Router();
//blog
router.post('/createBlog', blog_controller_1.blogController.createBlog);
router.get('/', blog_controller_1.blogController.getAllBlog);
router.get('/:id', blog_controller_1.blogController.getSingleBlog);
router.patch('/:id', blog_controller_1.blogController.updateBlog);
router.delete('/:id', blog_controller_1.blogController.deleteBlog);
// comments
router.patch('/comment/:id', blog_controller_1.blogController.createComments);
router.patch('/uncomment/:id', blog_controller_1.blogController.UnComment);
exports.blogRouter = router;
