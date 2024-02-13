import {Model, Types} from"mongoose"

import {IUserId}from"../user/user.interface"

export type IBoatService = {
    username:string;
    fullName:string;
    email:string;
    phone:string;
    password:string;
    natinality:{
       country:string,
       flag:string
    };
    birthday:{
        day:string,
        month:string,
        year:string
    }
    gender:'male' | 'female';
    userId: Types.ObjectId | IUserId;
    role:'crew' | 'boat' | 'boatservice';
    createdAt:Date;


}
export type BoatServiceModel = Model<IBoatService,Record<string,unknown>>;