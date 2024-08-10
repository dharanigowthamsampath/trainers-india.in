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
  if (!job) return null;

  return (
    <div className="bg-white w-full p-2">
      <p>{job.content}</p>
      <p className="mt-4 text-sm text-gray-500">
        Posted by: {job.user.name || "Anonymous"} on{" "}
        {new Date(job.createdAt).toLocaleDateString()}
      </p>
    </div>
  );
};

export default JobDescription;
