"use client";
import AddJobCard from "@/components/client/add-job-card";
import SidebarMenu from "@/components/client/sidebar";
import { getJobs } from "@/server/GetJobPosts";
import React, { useState, useEffect } from "react";

type Props = {};

const jobTabs = [
  { id: "explore", label: "Explore Jobs" },
  { id: "add", label: "Add Job" },
];

type Job = {
  id: string;
  content: string;
  createdAt: Date;
  user: {
    name: string | null;
  };
};

const JobList = ({
  jobs,
  onSelectJob,
}: {
  jobs: Job[];
  onSelectJob: (job: Job) => void;
}) => (
  <div className="bg-white w-full md:w-1/3 p-2">
    <h2 className="text-xl font-bold mb-4">Job List</h2>
    <ul>
      {jobs.map((job) => (
        <li
          key={job.id}
          className="mb-2 cursor-pointer hover:bg-gray-100"
          onClick={() => onSelectJob(job)}
        >
          <h3 className="font-semibold">{job.content.substring(0, 50)}...</h3>
          <p className="text-sm text-gray-500">
            Posted by: {job.user.name || "Anonymous"}
          </p>
        </li>
      ))}
    </ul>
  </div>
);

const JobDescription = ({ job }: { job: Job | null }) => (
  <div className="hidden md:block bg-white w-full md:w-2/3 p-2">
    <h2 className="text-xl font-bold mb-4">Job Description</h2>
    {job ? (
      <>
        <p>{job.content}</p>
        <p className="mt-4 text-sm text-gray-500">
          Posted by: {job.user.name || "Anonymous"} on{" "}
          {new Date(job.createdAt).toLocaleDateString()}
        </p>
      </>
    ) : (
      <p>Select a job to view its description.</p>
    )}
  </div>
);

const JobsPage: React.FC<Props> = () => {
  const [activeTab, setActiveTab] = useState(jobTabs[0].id);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  useEffect(() => {
    const fetchJobs = async () => {
      const result = await getJobs();
      if (result.success) {
        setJobs(result.jobs);
      } else {
        console.error(result.error);
      }
    };

    fetchJobs();
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case "explore":
        return (
          <div className="flex w-full space-x-2">
            <JobList jobs={jobs} onSelectJob={setSelectedJob} />
            <JobDescription job={selectedJob} />
          </div>
        );
      case "add":
        return <AddJobCard onJobAdded={() => setActiveTab("explore")} />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full flex flex-col md:flex-row p-2">
      <div className="w-full md:w-[250px] mb-4 md:mb-0 p-1">
        <SidebarMenu
          tabs={jobTabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>
      <div className="w-full flex flex-col md:flex-row p-1">
        {renderContent()}
      </div>
    </div>
  );
};

export default JobsPage;
