"use client"
import {useForm, SubmitHandler} from "react-hook-form"
import { Input } from "@/components/ui/input";
import {createObjSchema} from "../types/zod"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { find_obj } from "@/actions/find_obj";
import { useState } from "react";
import { create_obj } from "@/actions/create_obj";
import { toast } from "sonner"
import Link from "next/link";
import {SyncLoader} from "react-spinners" 

export default function Home() {

    const {register , formState:{errors},handleSubmit , reset} = useForm<z.infer< typeof createObjSchema> >({
      defaultValues:{
        id:"",
        email:"",
        secretText:""
      },
      resolver:zodResolver(createObjSchema)
    });
    function normalizeString(input: string): string {
      return input.replace(/\s+/g, '').toLowerCase();
    }
    const [error,setError] = useState("")
    const [isLoading,setIsloading] = useState(false)
    const onSubmutHandler:SubmitHandler<z.infer< typeof createObjSchema>> = (values)=>{
      // console.log(values)
      setError("");
      setIsloading(true);
      values.id = normalizeString(values.id);
      // console.log(values.id)
      find_obj(values.id).then((data)=>{
        if(data){
          setError("😒 Id Not Available")
          return ;
        }
        create_obj(values.id,values.email,values.secretText).then((data)=>{
            if(!data)
            {
              setError("😒 Something Broken")
              return
            }
            toast("😎😎 Successfull")
            // console.log("Successfull");
            reset();
        })
      }).finally(()=>{
        setIsloading(false)
      })
    }
  return (
    <div className="h-full w-full flex flex-col justify-center items-center px-2">
      <form onSubmit={handleSubmit(onSubmutHandler)} className="w-full max-w-[400px] space-y-2  shadow-xl px-3 py-4 rounded-xl bg-zinc-50">
        <h3>ID : <span className="text-red-400 text-sm font-semibold">[ No space ]</span></h3>
        <Input {...register("id")} disabled={isLoading}/>
        {errors.id && <p className="text-red-500 font-semibold">{errors.id.message}</p>}
        <h3>Email:</h3>
        <Input {...register("email")} disabled={isLoading}/>
        {errors.email && <p className="text-red-500 font-semibold">{errors.email.message}</p>}
        <h3>Secret Text:</h3>
        <Input {...register("secretText")} disabled={isLoading}/>
        {errors.secretText && <p className="text-red-500 font-semibold">{errors.secretText.message}</p>}
        <div className="w-full text-center pt-2">
          {isLoading ? <SyncLoader color="oklch(55.4% 0.046 257.417)"/> :<Button size={"lg"} >Submit</Button> }
        
        
        <h1>Or</h1>
        
        <Link href={"/find"} >
      <Button variant={"link"} type="button" className="text-blue-600 cursor-pointer" >Decode existing text</Button>
        </Link>
        </div>
        {error && <p className="text-red-500 font-semibold">{error}</p>}
      </form>
    </div>
  );
}
