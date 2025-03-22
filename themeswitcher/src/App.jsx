
import { useEffect, useState } from "react";
import Card from "./Components/Card";
import Themebutton from "./Components/Themebutton";
import { Themeprovider } from "./Context/Content";

function App() {
  const [thememode , setthememode]=useState("light")
   
    const darktheme=()=>{
      setthememode('dark')
    }
    const lighththeme=()=>{
      setthememode('light')
    }
    useEffect(()=>{
      document.querySelector('html').classList.remove('dark' , 'light')
     document.querySelector('html').classList.add(thememode)
    }, [thememode])
     

  return (
    <Themeprovider value={{thememode , darktheme  , lighththeme}}>
     <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <Themebutton />
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card />
              </div>
          </div>
      </div>

    </Themeprovider>
  );
}

export default App;
