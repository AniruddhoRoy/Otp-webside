"use server"
import db from "@/db";

export async function find_obj(id:string){
    try{
        const obj = await db.obj.findFirst({
            where:{
                id
            }
        })
        return obj
    }catch{
        return null;
    }
}