import { Model } from 'mongoose';

export type IUserId = {
  title: string;
};

export type IUser = {
  name: string;
  username:string;
  email: string;
  password: string;
  phone: string;
  image: string;
  // boat cew boatservicer
  role:'user' | 'admin' | 'viwers';
  address:string
   nationality:{
    country:string,
    flag:string
   };
   birthday:{
    day:string,
    month:string,
    year:string
   }
};

export type UserModel = Model<IUser, Record<string, unknown>>;
