// components/Loader.tsx

import React from "react";

type LoaderProps = {
  size?: "small" | "medium" | "large";
  color?: string;
};

const Loader: React.FC<LoaderProps> = ({
  size = "medium",
  color = "border-gray-900",
}) => {
  const sizeClasses = {
    small: "h-6 w-6 border-2",
    medium: "h-12 w-12 border-2",
    large: "h-16 w-16 border-4",
  };

  return (
    <div className="flex justify-center items-center">
      <div
        className={`animate-spin rounded-full ${sizeClasses[size]} border-t-${color} border-r-transparent border-b-${color} border-l-transparent`}
      ></div>
    </div>
  );
};

export default Loader;
