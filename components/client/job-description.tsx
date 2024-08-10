import React from "react";

type Job = {
  id: string;
  content: string;
  createdAt: Date;
  user: {
    name: string | null;
  };
};

const JobDescription = ({ job }: { job: Job | null }) => {
  return (
    <div className="hidden md:block bg-white w-full md:w-2/3 p-2">
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
};

export default JobDescription;
