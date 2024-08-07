"use client";

import React, { useState } from "react";

type ToggleButtonProps = {
  initialState?: boolean;
  onToggle: (isOn: boolean) => void;
};

const ToggleButton: React.FC<ToggleButtonProps> = ({
  initialState = false,
  onToggle,
}) => {
  const [isOn, setIsOn] = useState(initialState);

  const handleToggle = () => {
    setIsOn(!isOn);
    onToggle(!isOn);
  };

  return (
    <button
      className={`w-10 h-6 flex items-center rounded-full p-1 ${
        isOn ? "bg-blue-600" : "bg-gray-300"
      }`}
      onClick={handleToggle}
    >
      <div
        className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${
          isOn ? "translate-x-6" : ""
        }`}
      ></div>
    </button>
  );
};

export default ToggleButton;
