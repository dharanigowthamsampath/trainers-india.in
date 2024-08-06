"use client";

import React from "react";

type Tab = {
  id: string;
  label: string;
};

type Props = {
  tabs: Tab[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
  className?: string;
};

const SidebarMenu: React.FC<Props> = ({
  tabs,
  activeTab,
  setActiveTab,
  className = "",
}) => {
  return (
    <div className={`flex-col w-full min-h-[500px] ${className}`}>
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className={`p-2 cursor-pointer ${
            activeTab === tab.id
              ? "bg-blue-800 text-white"
              : "hover:bg-blue-800 hover:text-white"
          }`}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.label}
        </div>
      ))}
    </div>
  );
};

export default SidebarMenu;
