import { createContext, useContext } from "react"


 export const Themcontext= createContext({

    themode:"",
    darktheme:()=>{},
    lighththeme:()=>{}

 })

 export const Themeprovider= Themcontext.Provider

    export function useTheme(){ 
   return useContext(Themcontext)
 }