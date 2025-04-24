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

export default function Home() {

    const {register , formState:{errors},handleSubmit , reset} = useForm<z.infer< typeof createObjSchema> >({
      defaultValues:{
        id:"",
        email:"",
        secretText:""
      },
      resolver:zodResolver(createObjSchema)
    });
    const [error,setError] = useState("")
    const onSubmutHandler:SubmitHandler<z.infer< typeof createObjSchema>> = (values)=>{
      // console.log(values)
      setError("");
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
      })
    }
  return (
    <div className="h-full w-full flex flex-col justify-center items-center px-2">
      <form onSubmit={handleSubmit(onSubmutHandler)} className="w-full max-w-[400px] space-y-2  shadow-xl px-3 py-4 rounded-xl bg-zinc-50">
        <h3>ID:</h3>
        <Input {...register("id")}/>
        {errors.id && <p className="text-red-500 font-semibold">{errors.id.message}</p>}
        <h3>Email:</h3>
        <Input {...register("email")}/>
        {errors.email && <p className="text-red-500 font-semibold">{errors.email.message}</p>}
        <h3>Secret Text:</h3>
        <Input {...register("secretText")}/>
        {errors.secretText && <p className="text-red-500 font-semibold">{errors.secretText.message}</p>}
        <div className="w-full text-center pt-2">
        <Button size={"lg"} >Submit</Button>
        <h1>Or</h1>
        <Link href={"/find"}>
      <Button variant={"link"} type="button" className="text-blue-600 cursor-pointer">Decode existing text</Button>
        </Link>
        </div>
        {error && <p className="text-red-500 font-semibold">{error}</p>}
      </form>
    </div>
  );
}
