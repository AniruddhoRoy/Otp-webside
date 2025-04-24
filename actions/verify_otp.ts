"use server"

import db from "@/db";
import { find_obj } from "./find_obj";

export async function verify_otp(id:string,user_otp:string){
    try{
        const otp =await db.otp.findFirst({
            where:{
                id
            }
        })
        if(!otp){
            return null
        }
        if(otp.otp==user_otp){
            const obj = await find_obj(id)
            await db.otp.delete({
                where:{
                    id_database:otp.id_database
                }
            })
            return obj
        }
        return null;
    }catch{
        return null;
    }
}