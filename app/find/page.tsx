"use client"
import {useForm, SubmitHandler} from "react-hook-form"
import { Input } from "@/components/ui/input";
import {findObjSchema} from "../../types/zod"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner"
import { send_otp } from "@/actions/send_otp";
import { verify_otp } from "@/actions/verify_otp";
import Link from "next/link";
import { AlertDialogBox } from "@/components/custom/alertDialog";
import { SyncLoader } from "react-spinners";

export default function Home() {

    const {register , formState:{errors},handleSubmit} = useForm<z.infer< typeof findObjSchema> >({
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
    const [isLoading,setIsloading] = useState(false)
    function normalizeString(input: string): string {
      return input.replace(/\s+/g, '').toLowerCase();
    }
    const onSubmutHandler:SubmitHandler<z.infer< typeof findObjSchema>> = (values)=>{
        
      setError("");
      setSuccess("");
      values.id = normalizeString(values.id);
      setIsloading(true);
      if(!values.otp){
        send_otp(values.id).then((data)=>{
          if(data){
            toast("🔏 Otp send")
            setSuccess(`Otp is send to ${data.obj.email}`)
            setShowOtpBox(true);
            return;
          }
        }).finally(()=>{
          setIsloading(false)
        })
      }else{
        if(values.otp?.length!=6){
          setError("Invalid Otp")
          setIsloading(false)
          return;
        }
        verify_otp(values.id,values.otp).then((data)=>{
          if(data){
            setsecretText(data.text);
            setShowOtpBox(false);
          }else{
            setError("Invalid Otp")
            return;
          }
        }).finally(()=>{
          setIsloading(false)
        })
      }
      
      
      }
    
  return (
    <div className="h-full w-full flex justify-center items-center px-2">
      <form onSubmit={handleSubmit(onSubmutHandler)} className="w-full max-w-[400px] space-y-2  shadow-xl px-3 py-4 rounded-xl bg-zinc-50">
        <h3>ID:</h3>
        <Input {...register("id")} disabled={isLoading || showOtpBox}/>
        {errors.id && <p className="text-red-500 font-semibold">{errors.id.message}</p>}
        {showOtpBox && <>
        <h3>OTP:</h3>
        <Input {...register("otp")} disabled={isLoading}/>
        {errors.otp && <p className="text-red-500 font-semibold">{errors.otp.message}</p>}
        </>}
        <div className="w-full text-center pt-2">
        {isLoading ? <SyncLoader color="oklch(55.4% 0.046 257.417)"/> :<>{!secretText && <Button size={"lg"} >Submit</Button> }</>}
        {!secretText && <h1>Or</h1>}
        <Link href={"/"}>
      <Button variant={"link"} type="button" className="text-blue-600 cursor-pointer">Create New encrypted text</Button>
        </Link>
        {secretText && 
        <Button 
          variant={"link"} 
          type="reset" 
          className="text-blue-600 cursor-pointer"
          onClick={() => window.location.reload()}
        >
          View another encrypted text
        </Button>
      }
        </div>
        {secretText && <>
        <div className="w-full text-center pt-2">
        <AlertDialogBox heading="Secret Text" text={secretText}/>
        </div>
        </>}
        {error && <p className="text-red-500 font-semibold">{error}</p>}
        {success && <p className="text-gray-500 font-semibold">{success}</p>}
      </form>
    </div>
  );
}
