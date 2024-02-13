import { Schema, model } from 'mongoose';
import { IUser, UserModel } from './user.interface';
import bcrypt from 'bcryptjs';
import config from '../../../config';

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
    },
     username:{
      type:String
     },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      select: 0,
    },
     
    phone: {
      type: String,
    },
    role:{
      type:String,
      enum:['user' , 'admin' , 'viwers']
    },
    image: {
      type: String,
    },
   nationality:{
     country:{
      type:String
     },
     flag:{
      type:String
     }
   },
   birthday:{
        day:{type:String},
        month:{
          type:String
        },
        year:{
          type:String
        }
   }
  },
  {
    timestamps: true,
  },
);

// hash the password
userSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(
    this.password,
    Number(config.bycrypt_salt_round),
  );
  next();
});

export const User = model<IUser, UserModel>('User', userSchema);
