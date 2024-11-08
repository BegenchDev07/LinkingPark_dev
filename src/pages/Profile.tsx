
import { ProfileCard } from "components/Card/ProfileCard";
import { ProfileTabs } from "components/Tabs/ProfileTabs";
import { useState } from "react";

export const Profile = () => {
  const [activeTab, setActiveTab] = useState(1);
  const handleChange = (data:number) => {
    setActiveTab(data);
  }
  return (
    <div className="size-full p-5 bg-white">
      {/* <div className="size-full flex flex-col overflow-x-hidden"> */}

      {/* <div className=""> */}
        <ProfileCard
          imageSrc="https://randomuser.me/api/portraits/women/44.jpg" // Replace with actual image URL
          userName="Jane Doe"
          phone="123-456-7890"
          // onEditProfile={handleEditProfile}
          />
    {/* </div> */}
    <div className="size-full flex py-5 gap-3">

        <ProfileTabs onChange={handleChange} activeTab={activeTab} />
    </div>
    <div className="p-4 border rounded-b-lg bg-white rounded-lg">
        <div className={`transition-opacity duration-500 ${activeTab === 1 ? 'opacity-100' : 'opacity-0 hidden'}`}>
          Content for Tab 1
        </div>
        <div className={`transition-opacity duration-500 ${activeTab === 2 ? 'opacity-100' : 'opacity-0 hidden'}`}>
          Content for Tab 2
        </div>
        <div className={`transition-opacity duration-500 ${activeTab === 3 ? 'opacity-100' : 'opacity-0 hidden'}`}>
          Content for Tab 3
        </div>
      </div>
    {/* </div> */}
    {/* </div> */}
    </div>


  )
}
