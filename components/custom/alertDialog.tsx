"use client"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { Button } from "../ui/button";
  

export function AlertDialogBox({heading,text}:{heading:string,text:string}){
  async function copyText(){
    await navigator.clipboard.writeText(text); 
  }
    return <AlertDialog>
    <AlertDialogTrigger asChild>
    <Button variant="outline" className="border-2">See Secret Text</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>{heading}</AlertDialogTitle>
        <AlertDialogDescription>
          {text}
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Close</AlertDialogCancel>
        <AlertDialogAction onClick={()=>{
          copyText()
        }}>Copy</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
  
}