
import { ProfileCard } from "components/Card/ProfileCard";
import { ProfileTabs } from "components/Tabs/ProfileTabs";
const handleEditProfile = () => {
    alert("Edit profile clicked!");
  };
export const Profile = () => {
  return (
    <div className=" size-screen p-5 bg-gray-300">
      {/* <div className="size-full flex flex-col overflow-x-hidden"> */}

      {/* <div className=""> */}
        <ProfileCard
          imageSrc="https://randomuser.me/api/portraits/women/44.jpg" // Replace with actual image URL
          userName="Jane Doe"
          phone="123-456-7890"
          onEditProfile={handleEditProfile}
          />
    {/* </div> */}
    <div className="size-full flex py-5 gap-3">

        <ProfileTabs></ProfileTabs>
    </div>
    {/* </div> */}
    {/* </div> */}
    </div>
    

  )
}
