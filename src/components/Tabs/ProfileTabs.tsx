import React, { useState } from "react";

export const ProfileTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
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
      <div className="p-4 border rounded-b-lg">
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
    </div>
  );
};
