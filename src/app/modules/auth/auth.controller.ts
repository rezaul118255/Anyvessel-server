import { Request,Response } from'express'
import catchAsync from '../../../shared/catchAsync'
import config from '../../../config'
import {responseForData}from'../../../shared/sendResponse'
import { authService } from './auth.service'
import { ILoginUserResponse } from './auth.interface'
import httpStatus from 'http-status'

// login a user
const loginUser = catchAsync(async (req: Request, res: Response) => {
    const { ...loginData } = req.body;
    console.log(loginData)
    const result = await authService.loginUser(loginData);
    const { refreshToken,...others } = result;
  
    //   set refresh token at browser cookie
 
    const cookieOption = {
      secure: config.env === 'production',
      httpOnly: true,
    };
    res.cookie('refreshToken', refreshToken, cookieOption);
  
    if ('refreshToken' in result) {
      delete result.refreshToken;
    }
  
    responseForData.sendResponseForCreate<ILoginUserResponse>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'login Successful',
      data: others
    });
  });
export const authController = {
    loginUser
}