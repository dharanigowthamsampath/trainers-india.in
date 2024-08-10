"use client";
import React from "react";

type LoaderProps = {
  size?: "small" | "medium" | "large";
};

const Loader: React.FC<LoaderProps> = ({ size = "medium" }) => {
  const sizeClasses = {
    small: "h-6 w-6 border-2",
    medium: "h-12 w-12 border-4",
    large: "h-16 w-16 border-4",
  };

  return (
    <div className="flex justify-center items-center">
      <div
        className={`animate-spin rounded-full ${sizeClasses[size]} border-blue-500 border-t-transparent`}
      ></div>
    </div>
  );
};

export default Loader;
