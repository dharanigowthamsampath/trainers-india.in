// "use client";

// import React, { useState, useEffect } from "react";

// type Props = {};

// const JobsPage = (props: Props) => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <div className={`w-full p-4 ${isMobile ? "flex flex-col" : "flex"}`}>
//       {isMobile ? (
//         <>
//           <div>Mobile Page</div>
//         </>
//       ) : (
//         <>
//           <div className="w-1/4">Filter</div>
//           <div className="w-1/4">List</div>
//           <div className="w-2/4">Description</div>
//         </>
//       )}
//     </div>
//   );
// };

// export default JobsPage;

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
  <div className="bg-white w-1/3 mx-1 p-2">
    <h2 className="text-xl font-bold mb-4">Job List</h2>
    {/* Add your job list implementation here */}
    <ul>
      <li className="mb-2">Job 1</li>
      <li className="mb-2">Job 2</li>
      <li className="mb-2">Job 3</li>
    </ul>
  </div>
);

const JobDescription = () => (
  <div className="bg-white w-2/3 mx-1 p-2">
    <h2 className="text-xl font-bold mb-4">Job Description</h2>
    {/* Add your job description implementation here */}
    <p>This is a detailed description of the selected job.</p>
  </div>
);

const AddJobForm = () => (
  <div className="bg-white w-full mx-1 p-2">
    <h2 className="text-xl font-bold mb-4">Add New Job</h2>
    {/* Add your job form implementation here */}
    <form>
      <div className="mb-4">
        <label htmlFor="jobTitle" className="block mb-2">
          Job Title
        </label>
        <input
          type="text"
          id="jobTitle"
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="jobDescription" className="block mb-2">
          Job Description
        </label>
        <textarea
          id="jobDescription"
          className="w-full p-2 border rounded"
          rows={4}
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Job
      </button>
    </form>
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
    <div className="w-full flex p-2">
      <div className="bg-white w-[250px] mx-1">
        <SidebarMenu
          tabs={jobTabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>
      <div className="w-full flex">{renderContent()}</div>
    </div>
  );
};

export default JobsPage;
