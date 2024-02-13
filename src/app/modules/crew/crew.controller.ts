import {Request,Response}from"express"
import httpStatus from "http-status"
import catchAsync from "../../../shared/catchAsync"
import { ICrew } from "./crew.interface"
import ApiError from "../../../errors/ApiError"
import pick from "../../../shared/pick"
import { crewService } from "./crew.server"
import { responseForData } from "../../../shared/sendResponse"
const createCrew = catchAsync(async(req:Request,res:Response)=>{
    const crewData = req.body;
    if(!crewData){
        throw new ApiError(httpStatus.BAD_GATEWAY,'Fill In the blank')
    }
    const result = await crewService.createCrew(crewData);
   
    responseForData.sendResponseForCreate(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:'Crew create Successfull',
        data:result
    })
  
})
const getAllCrew = catchAsync(async(req:Request,res:Response)=>{
 const paginationOption = pick(req.query,[
    'limit',
    'page',
    'sortBy',
    'sortOrder'
 ])
 const result = await crewService.getAllCrew(paginationOption)
 responseForData.sendResponseForCreate(res,{
    statusCode:httpStatus.OK,
    success:true,
    message:'getting all data',
    data:result
  })
 
})
const getSingleCrew = catchAsync(async(req:Request,res:Response)=>{
    const id = req.params.id;
    if(!id){
        throw new ApiError(httpStatus.BAD_REQUEST,'Id is not found')
    }
    const result = await crewService.getSingleCrew(id);
    responseForData.sendResponseForCreate(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:'successful',
        data:result
    })
})
const updateCrew =catchAsync(async(req:Request,res:Response)=>{
    const id = req.params.id;
    const travelData = req.body;
    const result = await crewService.updateCrew(id,travelData)
    responseForData.sendResponseForCreate<ICrew>(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:'successfull',
        data:result
    })
})
const deleteCrew=catchAsync(async(req:Request,res:Response)=>{
    const id = req.params.id;
    const result = await crewService.deleteCrew(id);
    responseForData.sendResponseForCreate(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:'delete succefull',
        data:result
    })
})
export const crewController = {
    createCrew,getAllCrew,getSingleCrew,updateCrew,deleteCrew
}