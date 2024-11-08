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
      <div role="tablist" className="tabs tabs-bordered">
        <a
          role="tab"
          className={`tab ${activeTab === 1 ? "tab-active" : ""}`}
          onClick={() => handleTabClick(1)}
        >
          已通过
        </a>
        <a
          role="tab"
          className={`tab ${activeTab === 2 ? "tab-active" : ""}`}
          onClick={() => handleTabClick(2)}
        >
          审核中
        </a>
        <a
          role="tab"
          className={`tab ${activeTab === 3 ? "tab-active" : ""}`}
          onClick={() => handleTabClick(3)}
        >
          未通过
        </a>
        <a
          role="tab"
          className={`tab ${activeTab === 4 ? "tab-active" : ""}`}
          onClick={() => handleTabClick(4)}
        >
          点赞过
        </a>
      </div>

      {/* Tab Content */}

    </div>
  );
};
