import {Schema,model}from'mongoose'
import {ICrew,CrewModel}from'./crew.interface';
import bcrypt from'bcryptjs'
import config from '../../../config';
export const crewSchema = new Schema<ICrew>(
    {
        username:{
            type:String
        },
        fullName:{
            type:String
        },
        email:{
            type:String
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
        experience:{
            type:String
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

crewSchema.pre('save',async function(next){
    this.password = await bcrypt.hash(this.password,Number(config.bycrypt_salt_round))
    next()
})
export  const Crew = model<ICrew,CrewModel>('Crew',crewSchema)