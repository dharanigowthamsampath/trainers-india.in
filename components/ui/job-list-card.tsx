import React from "react";

type Props = {
  title: string;
  username: string;
  isSelected: boolean;
};

const JobListCard = ({ title, username, isSelected }: Props) => {
  return (
    <div
      className={`w-full p-2 space-y-1 ${
        isSelected
          ? "bg-blue-800 text-white"
          : "hover:bg-blue-800 hover:text-white"
      }`}
    >
      <div className="font-medium">{title}</div>
      <div className="text-xs font-light">{username}</div>
    </div>
  );
};

export default JobListCard;
