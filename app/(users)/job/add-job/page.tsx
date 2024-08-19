import AddJobCard from "@/components/client/add-job-card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Post a Training Job | Trainers India",
  description:
    "Post your training requirements securely on Trainers India. Connect with skilled trainers across India for your technical, Java, aptitude, SAP, and other training needs.",
  keywords:
    "post training job, hire trainers, India, technical trainers, Java trainers, aptitude trainers, SAP trainers, secure job posting",
  authors: [{ name: "Trainers India Team" }],
  openGraph: {
    title: "Post a Training Job | Trainers India",
    description:
      "Securely post your training requirements and connect with top trainers across India. Find the perfect match for your technical, Java, aptitude, or SAP training needs.",
    type: "website",
    url: "https://www.trainers-india.in/job/add-job",
    siteName: "Trainers India",
    images: [
      {
        url: "https://www.trainers-india.in/OG_image.jpg",
        width: 1200,
        height: 630,
        alt: "Post a Training Job on Trainers India",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Post a Training Job | Trainers India",
    description:
      "Securely post your training requirements and connect with skilled trainers across India. Your gateway to finding the perfect trainer for your needs.",
    images: ["https://www.trainers-india.in/OG_image.jpg"],
  },
};

export default function AddJobPage() {
  return (
    <div className="w-full h-full">
      <AddJobCard />
    </div>
  );
}
