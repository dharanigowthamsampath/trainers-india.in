"use client";

import React, { useState, useEffect } from "react";

type Props = {};

const JobsPage = (props: Props) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={`w-full p-4 ${isMobile ? "flex flex-col" : "flex"}`}>
      {isMobile ? (
        <>
          <div>Mobile Page</div>
        </>
      ) : (
        <>
          <div className="w-1/4">Filter</div>
          <div className="w-1/4">List</div>
          <div className="w-2/4">Description</div>
        </>
      )}
    </div>
  );
};

export default JobsPage;
