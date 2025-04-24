"use server"
import { Resend } from 'resend';

const resend = new Resend(process.env.RESED_PRIVATE_KEY);

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