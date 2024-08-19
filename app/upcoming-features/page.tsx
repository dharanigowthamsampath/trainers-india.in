import React from "react";

type Feature = {
  id: string;
  text: string;
  startDate: string;
  endDate: string;
  completed?: boolean;
  progress: string;
};

const UpcomingFeatures = () => {
  const features: Feature[] = [
    {
      id: "1",
      text: "Add Delete option for the user who created the post",
      startDate: "17-Aug-2024",
      endDate: "-",
      completed: false,
      progress: "In Progress",
    },
    {
      id: "2",
      text: "Add a share option along with the share page",
      startDate: "-",
      endDate: "-",
      progress: "In-Queue",
    },
    {
      id: "3",
      text: "Implement user profile customization",
      startDate: "-",
      endDate: "-",
      progress: "In-Queue",
    },
  ];

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Upcoming Features</h2>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b">Feature</th>
            <th className="py-2 px-4 border-b">Start Date</th>
            <th className="py-2 px-4 border-b">End Date</th>
            <th className="py-2 px-4 border-b">Progress</th>
          </tr>
        </thead>
        <tbody>
          {features.map((feature) => (
            <tr key={feature.id}>
              <td className="py-2 px-4 border-b text-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600"
                  disabled
                  checked={feature.completed}
                />
              </td>
              <td className="py-2 px-4 border-b">{feature.text}</td>
              <td className="py-2 px-4 border-b text-center">
                {feature.startDate}
              </td>
              <td className="py-2 px-4 border-b text-center">
                {feature.endDate}
              </td>
              <td className="py-2 px-4 border-b text-center">
                {feature.progress}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Your existing page component
const YourPageComponent = () => {
  return (
    <div>
      <UpcomingFeatures />
    </div>
  );
};

export default YourPageComponent;
