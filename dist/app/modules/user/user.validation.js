"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userZodValidation = void 0;
const zod_1 = require("zod");
const userZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        email: zod_1.z.string({
            required_error: 'Email is required',
        }),
        password: zod_1.z.string({
            required_error: 'password is required',
        }),
        role: zod_1.z.enum(['admin', 'buyer', 'seller'], {
            required_error: 'Role is required',
        }),
        phone: zod_1.z.string({
            required_error: 'Phone number is required',
        }),
        image: zod_1.z.string(),
        address: zod_1.z.string({
            required_error: 'Address is required',
        }),
    }),
});
exports.userZodValidation = {
    userZodSchema,
};
