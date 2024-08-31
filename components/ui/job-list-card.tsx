import React from "react";

type Props = {
  title: string;
  username: string;
  isSelected: boolean;
  isHiring: boolean;
};

const JobListCard = ({ title, username, isSelected, isHiring }: Props) => {
  return (
    <div
      className={`w-full p-2 space-y-1 ${
        isSelected
          ? "bg-blue-800 text-white"
          : "hover:bg-blue-800 hover:text-white"
      }`}
    >
      <div className="flex w-full justify-between h-full items-center">
        <div className="">
          <div className="font-medium">{title}</div>
          <div className="text-xs font-light">{username}</div>
        </div>
        <div
          className={`text-xs rounded-full py-1 ${
            isHiring ? "bg-green-500 px-4" : "bg-blue-500 px-2"
          } text-white`}
        >
          {isHiring ? "Hiring" : "Open to Work"}
        </div>
      </div>
    </div>
  );
};

export default JobListCard;
