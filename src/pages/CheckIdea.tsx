import { Navbar } from "components/Navbar"
import { ProfileTabs } from "components/Tabs/ProfileTabs"
import { IdeaBox } from "components/IdeaBox";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";


export const CheckIdea = () => {
  const [activeTab, setActiveTab] = useState(1);
  // const some = useLocation()
  // debugger;
  const handleChange = (data:number) => {
    setActiveTab(data);
  }

  // useEffect(()=>{
  //   const some = useLocation()
  //   debugger
  // },[])

  return(
    <div className="size-full">
      <Navbar/>
      <ProfileTabs onChange={handleChange} activeTab={activeTab} />
      <div className="container mx-auto px-5">
        <div className="size-full flex items-center justify-center py-10 gap-3">
          <div className="w-1/2 flex flex-col">
            <IdeaBox edit={true} status={activeTab}/>
          </div>
          <div className="w-1/2 flex flex-col">
            <IdeaBox edit={true} status={activeTab}/>
          </div>
        </div>
      </div>
    </div>
  )
}
