import * as z from "zod"

export const  createObjSchema = z.object({
    id:z.string().min(4,"Id Minimum 4 character"),
    email:z.string().email(),
    secretText:z.string().min(1,"Secret Text is empty")
})

export const  findObjSchema = z.object({
    id:z.string().min(4,"Id Minimum 4 character"),
    otp:z.string().optional()
})