import {Request,Response}from"express"
import httpStatus from "http-status"
import catchAsync from "../../../shared/catchAsync"
import { IBoatService } from "./boatService.interface"
import ApiError from "../../../errors/ApiError"
import pick from "../../../shared/pick"
import { BoatServiceService } from "./boatService.server"
import { responseForData } from "../../../shared/sendResponse"
const createBoatService = catchAsync(async(req:Request,res:Response)=>{
    const crewData = req.body;
    // console.log(crewData)
    if(!crewData){
        throw new ApiError(httpStatus.BAD_GATEWAY,'Fill In the blank')
    }
    const result = await BoatServiceService.createBoartService(crewData);
   
    responseForData.sendResponseForCreate(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:'Crew create Successfull',
        data:result
    })
  
})
const getAllBoatService  = catchAsync(async(req:Request,res:Response)=>{
 const paginationOption = pick(req.query,[
    'limit',
    'page',
    'sortBy',
    'sortOrder'
 ])
 const result = await BoatServiceService.getAllBoatService(paginationOption)
 responseForData.sendResponseForCreate(res,{
    statusCode:httpStatus.OK,
    success:true,
    message:'getting all data',
    data:result
  })
 
})
const getSingleBoatService = catchAsync(async(req:Request,res:Response)=>{
    const id = req.params.id;
    if(!id){
        throw new ApiError(httpStatus.BAD_REQUEST,'Id is not found')
    }
    const result = await BoatServiceService.getSingleBoatService(id);
    responseForData.sendResponseForCreate(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:'successful',
        data:result
    })
})
const updateBoatService  =catchAsync(async(req:Request,res:Response)=>{
    const id = req.params.id;
    const travelData = req.body;
    const result = await BoatServiceService.updateBoatService(id,travelData)
    responseForData.sendResponseForCreate<IBoatService>(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:'successfull',
        data:result
    })
})
const deleteBoatService =catchAsync(async(req:Request,res:Response)=>{
    const id = req.params.id;
    const result = await BoatServiceService.deleteBoatService(id);
    responseForData.sendResponseForCreate(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:'delete succefull',
        data:result
    })
})
export const BoatServiceController = {
    createBoatService,
    getAllBoatService,
    getSingleBoatService,
    updateBoatService,
    deleteBoatService
}