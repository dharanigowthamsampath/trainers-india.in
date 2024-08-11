// import { AddJobPost } from "@/server/AddJobPost";
// import React, { useState, useTransition, useEffect } from "react";
// import RichTextEditor from "./rich-text-editor";

// const AddJobCard = () => {
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const [status, setStatus] = useState<{
//     type: "idle" | "success" | "error";
//     message: string;
//   }>({ type: "idle", message: "" });
//   const [isPending, startTransition] = useTransition();

//   useEffect(() => {
//     if (status.type !== "idle") {
//       const timer = setTimeout(() => {
//         setStatus({ type: "idle", message: "" });
//       }, 5000);

//       return () => clearTimeout(timer);
//     }
//   }, [status]);

//   const handleSubmit = async (formData: FormData) => {
//     startTransition(async () => {
//       const response = await AddJobPost(formData);
//       if (response.success) {
//         setStatus({
//           type: "success",
//           message: response.message || "Something went wrong",
//         });
//         setContent(""); // Reset the editor
//         setTitle("");
//       } else if (response.errors) {
//         setStatus({
//           type: "error",
//           message: response.errors
//             .map((e) => `${e.field}: ${e.message}`)
//             .join(", "),
//         });
//       } else {
//         setStatus({ type: "error", message: response.message });
//       }
//     });
//   };

//   return (
//     <div className="p-2 bg-white w-full h-full pb-5">
//       <form action={handleSubmit} className="space-y-2 w-full px-4">
//         <div className="w-full flex justify-between items-center">
//           <span className="text-lg font-medium">Add a Job Requirement</span>
//           <div className="space-x-2">
//             <button
//               type="submit"
//               className="py-2 px-4 bg-blue-700 text-white"
//               disabled={isPending}
//             >
//               {isPending ? "Posting..." : "Post Job"}
//             </button>
//           </div>
//         </div>
//         <input
//           name="title"
//           placeholder="Enter the Job title Here..."
//           className="border text-sm p-2 w-full"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />

//         <textarea
//           name="content"
//           className="border text-sm p-2 h-96 w-full"
//           placeholder="Enter Your Requirements here..."
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//         />
//         {status.type !== "idle" && (
//           <div
//             className={`mt-2 p-2 ${
//               status.type === "success"
//                 ? "bg-green-100 text-green-700"
//                 : "bg-red-100 text-red-700"
//             }`}
//           >
//             {status.message}
//           </div>
//         )}
//       </form>
//     </div>
//   );
// };

// export default AddJobCard;

"use client";

import { AddJobPost } from "@/server/AddJobPost";
import React, { useState, useTransition, useEffect } from "react";
import RichTextEditor from "@/components/client/rich-text-editor";

const AddJobCard = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error";
    message: string;
  }>({ type: "idle", message: "" });
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    if (status.type !== "idle") {
      const timer = setTimeout(() => {
        setStatus({ type: "idle", message: "" });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    startTransition(async () => {
      const formData = new FormData(e.currentTarget);
      formData.append("content", content);

      const response = await AddJobPost(formData);
      if (response.success) {
        setStatus({
          type: "success",
          message: response.message || "Job posted successfully",
        });
        setContent(""); // Reset the editor
        setTitle("");
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
      <form onSubmit={handleSubmit} className="space-y-2 w-full px-4">
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
        <input
          name="title"
          placeholder="Enter the Job title Here..."
          className="border text-sm px-4 py-2 w-full border-[#CCCCCC]"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <RichTextEditor
          value={content}
          onChange={(value) => setContent(value)}
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
