import {Model, Types} from"mongoose"

import {IUserId}from"../user/user.interface"

export type ICrew = {
    username:string;
    fullName:string;
    email:string;
    phone:string;
    password:string;
    experience:string;
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
export type CrewModel = Model<ICrew,Record<string,unknown>>;