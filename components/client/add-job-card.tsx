"use client";

import { AddJobPost } from "@/server/AddJobPost";
import React, { useState, useTransition } from "react";

const AddJobCard = () => {
  const [content, setContent] = useState("");
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error";
    message: string;
  }>({ type: "idle", message: "" });
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (formData: FormData) => {
    startTransition(async () => {
      const response = await AddJobPost(formData);
      if (response.success) {
        setStatus({
          type: "success",
          message: response.message || "Something went wrong",
        });
        setContent(""); // Reset the editor
      } else if (response.errors) {
        setStatus({
          type: "error",
          message: response.errors
            .map((e) => `${e.field}: ${e.message}`)
            .join(", "),
        });
      } else {
        setStatus({ type: "error", message: response.message });
      }
    });
  };

  return (
    <div className="p-2 bg-white w-full h-full pb-5">
      <form action={handleSubmit} className="space-y-2 w-full px-4">
        <div className="w-full flex justify-between items-center">
          <span className="text-lg font-medium">Add a Job Requirement</span>
          <div className="space-x-2">
            <button
              type="submit"
              className="py-2 px-4 bg-blue-700 text-white"
              disabled={isPending}
            >
              {isPending ? "Posting..." : "Post Job"}
            </button>
          </div>
        </div>
        <textarea
          name="content"
          className="border text-sm p-2 h-96 w-full"
          placeholder="Enter Your Requirements here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        {status.type !== "idle" && (
          <div
            className={`mt-2 p-2 ${
              status.type === "success"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {status.message}
          </div>
        )}
      </form>
    </div>
  );
};

export default AddJobCard;
