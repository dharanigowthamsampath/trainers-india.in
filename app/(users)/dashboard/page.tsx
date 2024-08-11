"use client";

import React, { useState } from "react";
import RichTextEditor from "@/components/client/rich-text-editor";
// import "react-quill/dist/quill.snow.css";

type Props = {};

const Dashboard: React.FC<Props> = () => {
  const [content, setContent] = useState("");

  const handleEditorChange = (value: string) => {
    setContent(value);
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <RichTextEditor value={content} onChange={handleEditorChange} />
      <h2>Entered Content:</h2>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default Dashboard;
