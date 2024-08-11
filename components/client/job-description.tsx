import React from "react";
import { purify } from "@/utils/purify";
import { Job } from "./explore-menu";

interface JobDescriptionProps {
  job: Job | null;
}

const JobDescription: React.FC<JobDescriptionProps> = ({ job }) => {
  if (!job) return null;

  return (
    <div className="bg-white w-full p-2">
      <div dangerouslySetInnerHTML={{ __html: purify.sanitize(job.content) }} />
      <p className="mt-4 text-sm text-gray-500">
        Posted by:{" "}
        <span className="text-blue-800 font-medium">
          {job.user.name || "Anonymous"}
        </span>{" "}
        on {new Date(job.createdAt).toLocaleDateString()}
      </p>
    </div>
  );
};

export default JobDescription;
