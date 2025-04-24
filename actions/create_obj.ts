"use server"

import db from "@/db";

export async function create_obj(id:string,email:string,text:string){
    try{
        const obj = await db.obj.create({
            data:{
                id,
                email,
                text
            }
        })
        return obj
    }catch(e){
        console.log(e)
        return null
    }
}