import React, { useState, useRef, useEffect } from "react";
import JobDescription from "../client/job-description";
import JobListCard from "./job-list-card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Job } from "../client/explore-menu";

interface JobListProps {
  jobs: Job[];
  onSelectJob: (job: Job) => void;
  selectedJob: Job | null;
  isMobile: boolean;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const JobList: React.FC<JobListProps> = ({
  jobs,
  onSelectJob,
  selectedJob,
  isMobile,
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const [contentHeights, setContentHeights] = useState<{
    [key: string]: number;
  }>({});
  const contentRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    if (isMobile) {
      jobs.forEach((job) => {
        if (contentRefs.current[job.id]) {
          setContentHeights((prev) => ({
            ...prev,
            [job.id]: contentRefs.current[job.id]?.scrollHeight || 0,
          }));
        }
      });
    }
  }, [jobs, isMobile]);

  return (
    <div className="h-full flex flex-col relative">
      <ul className="flex-grow overflow-y-auto scrollbar-hide scroll-m-0 pb-16">
        {jobs.map((job) => (
          <li key={job.id} className="mb-0.5">
            <div onClick={() => onSelectJob(job)}>
              <JobListCard
                username={job.user.name || "Anonymous"}
                title={`${job.title.substring(0, 70)}...`}
                isSelected={selectedJob?.id === job.id}
              />
            </div>
            {isMobile && (
              <div
                className="bg-white overflow-hidden transition-all duration-300 ease-in-out border-b"
                style={{
                  maxHeight:
                    selectedJob?.id === job.id ? contentHeights[job.id] : 0,
                }}
              >
                <div
                  ref={(el) => {
                    if (el) contentRefs.current[job.id] = el;
                  }}
                >
                  <JobDescription job={job} />
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
      <div className="absolute bottom-0 left-0 right-0 flex justify-around items-center p-2 bg-white border-t">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-2 py-1 bg-blue-800 text-white rounded disabled:opacity-50 mr-2"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-2 py-1 bg-blue-800 text-white rounded disabled:opacity-50 ml-2"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default JobList;
