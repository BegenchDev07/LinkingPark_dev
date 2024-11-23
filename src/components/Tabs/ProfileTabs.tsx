import React, { useState } from "react";

interface TabFormat {
  onChange: (data:number) => void;
  activeTab: number;

}

export const ProfileTabs: React.FC<TabFormat> = ({onChange,activeTab}) => {

  const handleTabClick = (tabIndex: number) => {
    onChange(tabIndex);
  };

  return (
    <div className="w-full max-w-md mx-auto px-5">
      {/* Tabs */}
      <div role="tablist" className="flex items-center justify-between border-b">
        <button
          role="tab"
          className={`border-b-transparent border-b transition ease-in-out duration-500 focus:border-b-black ${activeTab === 1 ? "tab-active" : ""}`}
          onClick={() => handleTabClick(1)}
        >
          已通过
        </button>
        <button
          role="tab"
          className={`border-b-transparent border-b transition ease-in-out duration-500 focus:border-b-black ${activeTab === 2 ? "tab-active" : ""}`}
          onClick={() => handleTabClick(2)}
        >
          审核中
        </button>
        <button
          role="tab"
          className={`border-b-transparent border-b transition ease-in-out duration-500 focus:border-b-black ${activeTab === 3 ? "tab-active" : ""}`}
          onClick={() => handleTabClick(3)}
        >
          未通过
        </button>
        <button
          role="tab"
          className={`border-b-transparent border-b transition ease-in-out duration-500 focus:border-b-black ${activeTab === 4 ? "tab-active" : ""}`}
          onClick={() => handleTabClick(0)}
        >
          点赞过
        </button>
      </div>

      {/* Tab Content */}

    </div>
  );
};
