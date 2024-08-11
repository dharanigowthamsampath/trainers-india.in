// import JobDescription from "../client/job-description";
// import JobListCard from "./job-list-card";

// export type Job = {
//   id: string;
//   title: string;
//   content: string;
//   createdAt: Date;
//   userId: string;
//   user: {
//     name: string | null;
//   };
// };

// const JobList = ({
//   jobs,
//   onSelectJob,
//   selectedJob,
//   isMobile,
// }: {
//   jobs: Job[];
//   onSelectJob: (job: Job) => void;
//   selectedJob: Job | null;
//   isMobile: boolean;
// }) => {
//   return (
//     <ul className="h-full overflow-y-auto scrollbar-hide scroll-m-0">
//       {jobs.map((job) => (
//         <li key={job.id} className="mb-0.5">
//           <div onClick={() => onSelectJob(job)}>
//             <JobListCard
//               username={job.user.name || "Anonymous"}
//               title={`${job.title.substring(0, 30)}...`}
//               isSelected={selectedJob?.id === job.id}
//             />
//           </div>
//           {isMobile && selectedJob?.id === job.id && (
//             <div className="bg-white p-2 border">
//               <JobDescription job={job} />
//             </div>
//           )}
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default JobList;

import React from "react";
import JobDescription from "../client/job-description";
import JobListCard from "./job-list-card";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

const JobList = ({
  jobs,
  onSelectJob,
  selectedJob,
  isMobile,
  currentPage,
  totalPages,
  onPageChange,
}: {
  jobs: Job[];
  onSelectJob: (job: Job) => void;
  selectedJob: Job | null;
  isMobile: boolean;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) => {
  return (
    <div className="h-full flex flex-col">
      <ul className="flex-grow overflow-y-auto scrollbar-hide scroll-m-0">
        {jobs.map((job) => (
          <li key={job.id} className="mb-0.5">
            <div onClick={() => onSelectJob(job)}>
              <JobListCard
                username={job.user.name || "Anonymous"}
                title={`${job.title.substring(0, 30)}...`}
                isSelected={selectedJob?.id === job.id}
              />
            </div>
            {isMobile && selectedJob?.id === job.id && (
              <div className="bg-white p-2 border">
                <JobDescription job={job} />
              </div>
            )}
          </li>
        ))}
      </ul>
      <div className="flex justify-evenly items-center p-2">
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
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default JobList;
