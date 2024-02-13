import express from "express";
import { userRouter } from "../modules/user/user.route";
import {blogRouter } from "../modules/blog/blog.router";
import {crewRouter} from "../modules/crew/crew.router";
import { authRouter } from "../modules/auth/auth.router";
import { boatServiceRouter } from "../modules/boat-service/boatService.router";
import { boatRouter } from "../modules/boat/boat.router";


const router = express.Router()

const moduleRoutes =[
    {
        path:'/users',
        route:userRouter
        
    },
    {
        path:'/blog',
        route:blogRouter
        
    },
    {
        path:'/crew',
        route:crewRouter
        
    },
    {
        path:'/boatService',
        route:boatServiceRouter
        
    },
    {
        path:'/boat',
        route:boatRouter
        
    },
    {
        path:'/auth',
        route:authRouter
        
    }
]
moduleRoutes.map(route => router.use(route.path,route.route));

export default router