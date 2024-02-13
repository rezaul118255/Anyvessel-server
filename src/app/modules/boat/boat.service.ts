import { Iboat } from "./boat.interface";
import { Boat } from "./boat.model";

const createBoatService = async(boat:Iboat)=>{
    const result = await Boat.create(boat);
    return result;
}

export const BoatService = {
    createBoatService
}