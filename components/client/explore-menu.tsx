"use client";

import React, { useEffect, useState } from "react";
import JobDescription from "./job-description";
import { getJobs } from "@/server/GetJobPosts";
import JobList from "../ui/job-list";

type Props = {};

type Job = {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  userId: string;
  user: {
    name: string | null;
  };
};

const ExploreMenuComponent: React.FC<Props> = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  useEffect(() => {
    const fetchJobs = async () => {
      const result = await getJobs();
      if (result.success && result.jobs) {
        setJobs(result.jobs || []);
      } else {
        console.error(result.error || "Failed to fetch jobs");
      }
    };
    fetchJobs();
  }, []);

  return (
    <div className="w-full h-full flex flex-col md:flex-row">
      <div className="w-full md:w-1/3 bg-white flex-shrink-0 mb-2 md:mb-0 md:mr-1 overflow-y-auto h-[50vh] md:h-full">
        <JobList
          jobs={jobs}
          onSelectJob={setSelectedJob}
          selectedJob={selectedJob}
        />
      </div>
      <div className="w-full md:w-2/3 bg-white flex-grow overflow-y-auto h-[50vh] md:h-full">
        <JobDescription job={selectedJob} />
      </div>
    </div>
  );
};

export default ExploreMenuComponent;
