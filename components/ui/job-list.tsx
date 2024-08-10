import JobListCard from "./job-list-card";

// types.ts
export type Job = {
  id: string;
  content: string;
  createdAt: Date;
  userId: string; // Include this
  user: {
    name: string | null;
  };
};

const JobList = ({
  jobs,
  onSelectJob,
  selectedJob,
}: {
  jobs: Job[];
  onSelectJob: (job: Job) => void;
  selectedJob: Job | null;
}) => {
  return (
    <div className="bg-white w-full">
      <ul className="overflow-y-auto scrollbar-hide scroll-m-0">
        {jobs.map((job) => (
          <li
            key={job.id}
            className="mb-0.5 cursor-pointer"
            onClick={() => onSelectJob(job)}
          >
            <JobListCard
              username={job.user.name || "Anonymous"}
              title={`${job.content.substring(0, 30)}...`}
              isSelected={selectedJob?.id === job.id}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobList;
