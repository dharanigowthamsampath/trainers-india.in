"use client";

import React, { useEffect, useState } from "react";
import JobDescription from "./job-description";
import { getJobs } from "@/server/GetJobPosts";
import JobList from "../ui/job-list";

type Props = {};

type Job = {
  id: string;
  content: string;
  createdAt: Date;
  userId: string; // Add this line
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
    <div className="w-full h-full flex">
      <div className="w-1/3 bg-white flex-grow mx-1 overflow-y-auto">
        <div className="flex w-full space-x-2">
          <JobList
            jobs={jobs}
            onSelectJob={setSelectedJob}
            selectedJob={selectedJob}
          />
        </div>
      </div>
      <div className="w-2/3 bg-white flex-grow mx-1 overflow-y-auto">
        <JobDescription job={selectedJob} />
      </div>
    </div>
  );
};

export default ExploreMenuComponent;
