import JobListCard from "@/components/ui/job-list-card";
import React from "react";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <div className="p-2">
      <JobListCard />
    </div>
  );
};

export default Dashboard;
