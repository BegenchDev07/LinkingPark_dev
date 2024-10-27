import { MenuSelector } from "components/MenuSelector"
import { Navbar } from "components/Navbar"
import { log } from "console"
import { useRef, useEffect } from "react"

export const Profile = () => {
  const currentTab = useRef<any>(null)

  useEffect(()=>{
    console.log(currentTab?.current?.getClickedButton());
  },[currentTab])
  return(
    <div className="w-full h-screen flex flex-col px-1 gap-3 items-center justify-start">
      <div className="w-full h-auto px-5">
        <Navbar/>
        <MenuSelector ref={currentTab}/>
      </div>
    </div>
  )
}
