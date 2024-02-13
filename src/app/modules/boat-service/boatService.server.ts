import { IBoatService } from "./boatService.interface";
import {BoatService} from'./boatService.model'
import {IPaginationOption}from'../../../shared/pagination'
import {IGenericResponse}from'../../../interfaces/common'

const createBoartService = async(boatService:IBoatService)=>{
    const result = await BoatService.create(boatService);
    return result
}
const getAllBoatService=async(PaginationOption:IPaginationOption,):Promise<IGenericResponse<IBoatService[]>>=>{
    const {page=1,limit=10} = PaginationOption;
    const skip =(page-1)*limit;
    const result = await BoatService.find().sort({
        createdAt:'desc'
    }).skip(skip).limit(limit)
    const total = await BoatService.countDocuments();
    return {
        meta:{
            page,
            limit,
            total
        },
        data:result
    }
}
const getSingleBoatService = async(id:string):Promise<IBoatService | null>=>{
    const result = await BoatService.findById(id);
    return result;
}
const updateBoatService = async(id:string,payload:Partial<IBoatService>)=>{
    const result = await BoatService.findByIdAndUpdate(
        {_id:id},
         {$set:{...payload} },
         {new:true}
    )
    return result
}
const deleteBoatService=async(id:string)=>{
    const result = await BoatService.findByIdAndDelete(id);
    return result;
}
export const BoatServiceService = {
    createBoartService,
    getAllBoatService,
    getSingleBoatService,
    updateBoatService,
    deleteBoatService
}