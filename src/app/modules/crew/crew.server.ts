import { ICrew } from "./crew.interface";
import {Crew} from'./crew.model'
import {IPaginationOption}from'../../../shared/pagination'
import {IGenericResponse}from'../../../interfaces/common'

const createCrew = async(crew:ICrew)=>{
    const result = await Crew.create(crew);
    return result
}
const getAllCrew=async(PaginationOption:IPaginationOption,):Promise<IGenericResponse<ICrew[]>>=>{
    const {page=1,limit=10} = PaginationOption;
    const skip =(page-1)*limit;
    const result = await Crew.find().sort({
        createdAt:'desc'
    }).skip(skip).limit(limit)
    const total = await Crew.countDocuments();
    return {
        meta:{
            page,
            limit,
            total
        },
        data:result
    }
}
const getSingleCrew = async(id:string):Promise<ICrew | null>=>{
    const result = await Crew.findById(id);
    return result;
}
const updateCrew = async(id:string,payload:Partial<ICrew>)=>{
    const result = await Crew.findByIdAndUpdate(
        {_id:id},
         {$set:{...payload} },
         {new:true}
    )
    return result
}
const deleteCrew=async(id:string)=>{
    const result = await Crew.findByIdAndDelete(id);
    return result;
}
export const crewService = {
    createCrew,getAllCrew,getSingleCrew,updateCrew,deleteCrew
}