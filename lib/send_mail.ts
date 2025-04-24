"use server"
import { Resend } from 'resend';

const resend = new Resend("re_aDw4Jp7n_LuTbZEboMjU6P8XrYN695WzF");

export async function  send_mail (subject:string,to:string,body:string){
    try{

        const { data, error } = await resend.emails.send({
            from: 'OTP <noreply@ezzoo.click>',
            to,
            subject,
            html:body,
        });
        return data
        
    }catch{
        return null
    }

};