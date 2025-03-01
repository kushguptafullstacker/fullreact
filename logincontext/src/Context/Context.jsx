import React, { useState } from 'react'
import Logincontext from './Create'
const ContextLogin=function Context({children}) {
   const [use , setuse]=useState("")
   const [pass , setpass] =useState("")
  return (
    <Logincontext.Provider value={{use , setuse , pass , setpass}}>
      {children}
    </Logincontext.Provider>
  )
}

export default ContextLogin