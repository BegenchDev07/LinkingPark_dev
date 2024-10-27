import React from "react";
import { ActionButton } from "components/Buttons/ActionButton";

interface ProfileCardProps {
  imageSrc: string; // URL of the profile image
  userName: string; // Name of the user
  phone: string; // Phone number of the user
  onEditProfile?: () => void; // Optional edit profile click handler
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
  imageSrc,
  userName,
  phone,
  onEditProfile,
}) => {
  return (
    <div className="max-w-l mx-auto bg-white  rounded-xl p-4 text-center">
      {/* Profile Image */}
      <img
        src={imageSrc}
        alt="Profile"
        className="w-24 h-24 mx-auto rounded-full object-cover"
      />

      {/* User Details */}
      <h2 className="text-lg font-semibold mt-2">{userName}</h2>
      <p className="text-gray-500">{phone}</p>

      {/* Edit Profile Button */}
      <ActionButton label="修改个人资料"></ActionButton>
      
    </div>
  );
};
