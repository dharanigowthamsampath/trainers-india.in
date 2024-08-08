"use client";
import AddJobCard from "@/components/client/add-job-card";
import SidebarMenu from "@/components/client/sidebar";
import React, { useState } from "react";

type Props = {};

const jobTabs = [
  { id: "explore", label: "Explore Jobs" },
  { id: "add", label: "Add Job" },
];

const JobList = () => (
  <div className="bg-white w-full md:w-1/3 p-2">
    <h2 className="text-xl font-bold mb-4">Job List</h2>
    <ul>
      <li className="mb-2">Job 1</li>
      <li className="mb-2">Job 2</li>
      <li className="mb-2">Job 3</li>
    </ul>
  </div>
);

const JobDescription = () => (
  <div className="hidden md:block bg-white w-full md:w-2/3 p-2">
    <h2 className="text-xl font-bold mb-4">Job Description</h2>
    <p>This is a detailed description of the selected job.</p>
  </div>
);

const JobsPage: React.FC<Props> = () => {
  const [activeTab, setActiveTab] = useState(jobTabs[0].id);

  const renderContent = () => {
    switch (activeTab) {
      case "explore":
        return (
          <>
            <JobList />
            <JobDescription />
          </>
        );
      case "add":
        return <AddJobCard />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full flex flex-col md:flex-row p-2">
      <div className="w-full md:w-[250px] mb-4 md:mb-0">
        <SidebarMenu
          tabs={jobTabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>
      <div className="w-full flex flex-col md:flex-row">{renderContent()}</div>
    </div>
  );
};

export default JobsPage;
