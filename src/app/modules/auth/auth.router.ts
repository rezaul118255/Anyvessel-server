import express from'express'
import {authController}from'./auth.controller'
import { authValidation } from './auth.validation'
const router = express.Router()
//login user
router.post('/login',authController.loginUser)
export const authRouter = router;