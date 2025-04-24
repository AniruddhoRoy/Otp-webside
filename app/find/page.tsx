"use client"
import {useForm, SubmitHandler} from "react-hook-form"
import { Input } from "@/components/ui/input";
import {findObjSchema} from "../../types/zod"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { find_obj } from "@/actions/find_obj";
import { useState } from "react";
import { create_obj } from "@/actions/create_obj";
import { toast } from "sonner"
import { send_otp } from "@/actions/send_otp";
import { verify_otp } from "@/actions/verify_otp";
import Link from "next/link";

export default function Home() {

    const {register , formState:{errors},handleSubmit , reset,watch} = useForm<z.infer< typeof findObjSchema> >({
      defaultValues:{
        id:"",
        otp:"",
      },
      resolver:zodResolver(findObjSchema)
    });
    const [error,setError] = useState("")
    const [success,setSuccess] = useState("")
    const [secretText,setsecretText] = useState("")
    const [showOtpBox,setShowOtpBox] = useState(false)
    const onSubmutHandler:SubmitHandler<z.infer< typeof findObjSchema>> = (values)=>{
        
      setError("");
      setSuccess("");
      if(!values.otp){
        send_otp(values.id).then((data)=>{
          if(data){
            toast("🔏 Otp send")
            setSuccess(`Otp is send to ${data.obj.email}`)
            setShowOtpBox(true);
            return;
          }
        })
      }else{
        if(values.otp?.length!=6){
          setError("Invalid Otp")
          return;
        }
        verify_otp(values.id,values.otp).then((data)=>{
          if(data){
            setsecretText(data.text);
          }else{
            setError("Invalid Otp")
            return;
          }
        })
      }
      
      
      }
    
  return (
    <div className="h-full w-full flex justify-center items-center px-2">
      <form onSubmit={handleSubmit(onSubmutHandler)} className="w-full max-w-[400px] space-y-2  shadow-xl px-3 py-4 rounded-xl bg-zinc-50">
        <h3>ID:</h3>
        <Input {...register("id")}/>
        {errors.id && <p className="text-red-500 font-semibold">{errors.id.message}</p>}
        {showOtpBox && <>
        <h3>OTP:</h3>
        <Input {...register("otp")}/>
        {errors.otp && <p className="text-red-500 font-semibold">{errors.otp.message}</p>}
        </>}
        <div className="w-full text-center pt-2">
        <Button size={"lg"} type="submit" >Submit</Button>
        <h1>Or</h1>
        <Link href={"/"}>
      <Button variant={"link"} type="button" className="text-blue-600 cursor-pointer">Create New encrypted text</Button>
        </Link>
        </div>
        {error && <p className="text-red-500 font-semibold">{error}</p>}
        {success && <p className="text-green-500 font-semibold">{success}</p>}
        {secretText && <p className="text-green-500 font-semibold">{secretText}</p>}
      </form>
    </div>
  );
}
