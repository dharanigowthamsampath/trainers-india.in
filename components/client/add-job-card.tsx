import React from "react";

type Props = {};

const AddJobCard = (props: Props) => {
  return (
    <div className="p-2 bg-white w-full h-full pb-5">
      <form action="" className="space-y-2 w-full px-4">
        <div className="w-full flex justify-between items-center">
          <span className="text-lg font-medium">Add a Job Requirement</span>
          <div className="space-x-2">
            <button className="py-2 px-4 bg-gray-100">Save Draft</button>
            <button className="py-2 px-4 bg-blue-700 text-white">
              Post Job
            </button>
          </div>
        </div>

        <textarea
          className="border text-sm p-2 h-96 w-full"
          placeholder="Enter Your Requirements here..."
        />
      </form>
    </div>
  );
};

export default AddJobCard;
