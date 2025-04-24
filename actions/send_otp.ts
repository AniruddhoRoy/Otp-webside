"use server"

import db from "@/db";
import { find_obj } from "./find_obj";
import { send_mail } from "@/lib/send_mail";


function generateNumericOTP(length: number = 6): string {
    let otp = '';
    for (let i = 0; i < length; i++) {
      otp += Math.floor(Math.random() * 10); // 0-9
    }
    return otp;
  }
  function maskEmail(email: string): string {
    // Split email into local part (before @) and domain part
    const [localPart, domain] = email.split('@');
    
    // If the email format is invalid, return as-is
    if (!localPart || !domain) return email;
  
    // Keep first 3 characters visible
    const visibleStart = localPart.slice(0, 3);
    
    // Keep last 2 characters before @ visible
    const visibleEnd = localPart.slice(-2);
    
    // Create masked part (minimum 4 asterisks)
    const maskedPart = '****';
    
    // Combine the parts
    return `${visibleStart}${maskedPart}${visibleEnd}@${domain}`;
  }
export async function send_otp(id:string){
    const obj = await find_obj(id)
    if(!obj){
        return null;
    }
    const existingOtp = await db.otp.findFirst({
        where:{
            id
        }
    })
    if(existingOtp){
        await db.otp.deleteMany({
            where:{
                id
            }
        })
    }
    const otp = await db.otp.create({
        data:{
            id,
            otp:generateNumericOTP(6)
        }
    })
    await send_mail("OTP",obj.email,`Your Otp - ${otp.otp}`)
    obj.email = maskEmail(obj.email);
    return {otp,obj};
}