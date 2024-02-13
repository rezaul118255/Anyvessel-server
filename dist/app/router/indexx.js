"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_route_1 = require("../modules/user/user.route");
const blog_router_1 = require("../modules/blog/blog.router");
const crew_router_1 = require("../modules/crew/crew.router");
const auth_router_1 = require("../modules/auth/auth.router");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/users',
        route: user_route_1.userRouter
    },
    {
        path: '/blog',
        route: blog_router_1.blogRouter
    },
    {
        path: '/crew',
        route: crew_router_1.crewRouter
    },
    {
        path: '/auth',
        route: auth_router_1.authRouter
    }
];
moduleRoutes.map(route => router.use(route.path, route.route));
exports.default = router;
