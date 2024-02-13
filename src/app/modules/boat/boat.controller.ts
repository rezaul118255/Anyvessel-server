import { Request,Response, response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import { Iboat } from "./boat.interface";
import ApiError from "../../../errors/ApiError";
import {BoatService}from'./boat.service'
import { responseForData } from "../../../shared/sendResponse";
const createBoat = catchAsync(async(req:Request,res:Response)=>{
    const BoatData = req.body;
    if(!BoatData){
        throw new ApiError(httpStatus.BAD_REQUEST,'Fill is the blank')
    }
    const result = await BoatService.createBoatService(BoatData);
   responseForData.sendResponseForCreate(res,{
    statusCode:httpStatus.OK,
    success:true,
    message:'Boat create Succefully',
    data:result
   })
})
export const BoatController = {
    createBoat
}