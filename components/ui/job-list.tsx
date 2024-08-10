import JobDescription from "../client/job-description";
import JobListCard from "./job-list-card";

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
}: {
  jobs: Job[];
  onSelectJob: (job: Job) => void;
  selectedJob: Job | null;
  isMobile: boolean;
}) => {
  return (
    <ul className="h-full overflow-y-auto scrollbar-hide scroll-m-0">
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
            <div className="bg-white p-2">
              <JobDescription job={job} />
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default JobList;
