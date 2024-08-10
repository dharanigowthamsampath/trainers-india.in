"use client";

import ExploreMenuComponent from "@/components/client/explore-menu";
import SidebarMenu from "@/components/client/sidebar";
import React, { useState } from "react";

type Props = {};

const jobTabs = [
  { id: "explore", label: "Explore Jobs" },
  { id: "add", label: "Add Job" },
  { id: "saved", label: "Saved Jobs" },
];

const JobPage = (props: Props) => {
  const [activeTab, setActiveTab] = useState(jobTabs[0].id);

  const renderContent = () => {
    switch (activeTab) {
      case "explore":
        return <ExploreMenuComponent />;
      case "add":
        return <div>Add Menu</div>;
      case "saved":
        return <div>Saved Jobs Menu</div>;
      default:
        return null;
    }
  };

  return (
    <div className="w-full h-[calc(100vh-50px)] flex pt-2">
      <div className="w-full h-full flex space-x-1">
        <div className="w-[250px] bg-white overflow-y-auto">
          {/* Sidebar content */}
          <SidebarMenu
            tabs={jobTabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>
        <div className="w-full h-full flex">{renderContent()}</div>
      </div>
    </div>
  );
};

export default JobPage;
