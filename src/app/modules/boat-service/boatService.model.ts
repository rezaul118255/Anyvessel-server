import {Schema,model}from'mongoose'
import {IBoatService,BoatServiceModel}from'./boatService.interface';
import bcrypt from'bcryptjs'
import config from '../../../config';
export const  boatServiceSchema = new Schema<IBoatService>(
    {
        username:{
            type:String
        },
        fullName:{
            type:String
        },
        email:{
            type:String,
        
        },
        password:{
            type:String,
        
        },
        phone:{
            type:String
        },
        gender:{
            type:String,
            enum:['male','female']
        },
        natinality:{
            country:{type:String},
            flag:{type:String}
        },
        birthday:{
            day:{
                type:String
            },
            month:{
                type:String
            },
            year:{
                type:String
            }
        },
        role:{
            type:String,
            enum:['crew','boat','boatservice']
          },
        createdAt:{
            type:Date,
            default:Date.now()
        },
        userId:{
            type:Schema.Types.ObjectId,
            ref:'User'
        }
    },{
        timestamps:true,
        toJSON:{
            virtuals:true
        }
    }
)

boatServiceSchema.pre('save',async function(next){
    this.password = await bcrypt.hash(this.password,Number(config.bycrypt_salt_round))
    next()
})
export  const BoatService = model<IBoatService,BoatServiceModel>('BoatService',boatServiceSchema)