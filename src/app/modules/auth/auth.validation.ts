import { z } from 'zod';

//loging validation data 
const loginValidationZodSchema = z.object({
    body: z.object({
        email: z.string({
            required_error:'Email is required'
        }),
        password: z.string({
            required_error:'Password is requird'
        })
    })
})

export const authValidation = {
    loginValidationZodSchema
}