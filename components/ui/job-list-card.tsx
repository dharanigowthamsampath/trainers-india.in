import React from "react";

type Props = {
  title: string;
  username: string;
};

const JobListCard = ({ title, username }: Props) => {
  return (
    <div className="w-full hover:bg-blue-800 hover:text-white p-2 space-y-1">
      <div className=" font-medium ">{title}</div>
      <div className=" text-xs font-light">{username}</div>
    </div>
  );
};

export default JobListCard;
