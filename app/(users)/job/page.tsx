"use client";
import AddJobCard from "@/components/client/add-job-card";
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
        return <AddJobCard />;
      case "saved":
        return <div>Saved Jobs Menu</div>;
      default:
        return null;
    }
  };

  return (
    <div className="w-full h-[calc(100vh-50px)] flex flex-col">
      <div className="w-full bg-white mb-2">
        <SidebarMenu
          tabs={jobTabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>
      <div className="w-full flex-grow overflow-hidden">{renderContent()}</div>
    </div>
  );
};

export default JobPage;
