"use client";
import React, { useState, useEffect } from "react";

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
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    if (isMobile) {
      setIsOpen(false);
    }
  };

  const activeTabLabel =
    tabs.find((tab) => tab.id === activeTab)?.label || "Menu";

  return (
    <div className={`relative ${className}`}>
      {isMobile ? (
        <div className="w-full">
          <button
            className="w-full p-2 bg-blue-800 text-white text-left flex justify-between items-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            {activeTabLabel}
            <span
              className={`transform transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
            >
              ▼
            </span>
          </button>
          {isOpen && (
            <div className="absolute top-full left-0 w-full bg-white shadow-md z-10">
              {tabs.map((tab) => (
                <div
                  key={tab.id}
                  className={`p-2 cursor-pointer ${
                    activeTab === tab.id
                      ? "bg-blue-800 text-white"
                      : "hover:bg-blue-800 hover:text-white"
                  }`}
                  onClick={() => handleTabClick(tab.id)}
                >
                  {tab.label}
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className={`flex w-96 ${className}`}>
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`p-2 cursor-pointer flex-grow text-center ${
                activeTab === tab.id
                  ? "bg-blue-800 text-white"
                  : "hover:bg-blue-800 hover:text-white"
              }`}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SidebarMenu;
