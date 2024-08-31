import React from "react";

interface ToggleButtonProps {
  value: "hiring" | "available";
  selectedValue: "hiring" | "available";
  onChange: (value: "hiring" | "available") => void;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({
  value,
  selectedValue,
  onChange,
}) => {
  return (
    <div className="flex">
      <button
        type="button"
        className={`px-4 py-2 transition-colors duration-300 ${
          selectedValue === "hiring"
            ? "bg-blue-800 text-white hover:bg-blue-800"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        }`}
        onClick={() => onChange("hiring")}
      >
        Hiring
      </button>
      <button
        type="button"
        className={`px-4 py-2 transition-colors duration-300 ${
          selectedValue === "available"
            ? "bg-blue-800 text-white hover:bg-blue-800"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        }`}
        onClick={() => onChange("available")}
      >
        Open to Work
      </button>
    </div>
  );
};

export default ToggleButton;
