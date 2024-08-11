"use client";
import React, { useEffect, useState } from "react";
import JobDescription from "./job-description";
import { getJobs } from "@/server/GetJobPosts";
import JobList from "../ui/job-list";
import Loader from "../loader";

type Props = {};

export type Job = {
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
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  useEffect(() => {
    const fetchJobs = async () => {
      setIsLoading(true);
      try {
        const result = await getJobs(currentPage);
        if (result.success && result.jobs) {
          setJobs(result.jobs || []);
          setTotalPages(result.totalPages || 1);
        } else {
          console.error(result.error || "Failed to fetch jobs");
        }
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchJobs();
  }, [currentPage]);

  const handleJobSelect = (job: Job) => {
    setSelectedJob(selectedJob?.id === job.id ? null : job);
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="w-full h-full flex flex-col md:flex-row">
      <div className="w-full md:w-1/3 bg-white flex-shrink-0 md:mb-0 md:mr-1 overflow-y-auto h-full">
        {isLoading ? (
          <div className="flex justify-center items-center h-full">
            <Loader size="small" />
          </div>
        ) : (
          <JobList
            jobs={jobs}
            onSelectJob={handleJobSelect}
            selectedJob={selectedJob}
            isMobile={isMobile}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </div>
      {!isMobile && (
        <div className="hidden md:block w-full md:w-2/3 bg-white flex-grow overflow-y-auto h-full">
          <JobDescription job={selectedJob} />
        </div>
      )}
    </div>
  );
};

export default ExploreMenuComponent;
