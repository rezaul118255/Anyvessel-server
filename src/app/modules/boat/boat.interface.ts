import { Model } from "mongoose";

export type Iboat= {
      username:string;
      fullName:string;
      email:string;
      phone:string;
      password:string;
      gender: 'male' | 'female';
      birthday:{
        day:string;
        month:string;
        year:string;
      };
      nationality:{
        country:string;
        flag:string
      };
      language:string[]
      romance:boolean;
      picture:string;
      identityPhoto:string;
      description:string;
      role:'crew' | 'boat' | 'boatservice';
      createdAt:Date
}
export type BoatModel = Model<Iboat,Record<string,unknown>>;