import type { Metadata } from "next";
import ExploreMenuComponent from "@/components/client/explore-menu";

export const metadata: Metadata = {
  title: "Explore Training Jobs | Trainers India",
  description:
    "Discover a wide range of training opportunities across India. Find jobs for technical trainers, Java experts, aptitude specialists, SAP gurus, and more. Secure, verified listings for trainers.",
  keywords:
    "explore training jobs, India, technical trainers, Java trainers, aptitude trainers, SAP trainers, job listings, training opportunities",
  authors: [{ name: "Trainers India Team" }],
  openGraph: {
    title: "Explore Training Jobs | Trainers India",
    description:
      "Browse through verified training job listings across India. Find opportunities in technical training, Java, aptitude, SAP, and various other domains. Secure and efficient job searching for trainers.",
    type: "website",
    url: "https://www.trainers-india.in/job/explore",
    siteName: "Trainers India",
    images: [
      {
        url: "https://www.trainers-india.in/OG_image.jpg",
        width: 1200,
        height: 630,
        alt: "Explore Training Jobs on Trainers India",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Explore Training Jobs | Trainers India",
    description:
      "Discover verified training opportunities across India. Your gateway to finding the perfect training job in technical, Java, aptitude, SAP, and other domains.",
    images: ["https://www.trainers-india.in/OG_image.jpg"],
  },
};

export default function ExploreJobsPage() {
  return (
    <div className="w-full h-full">
      <ExploreMenuComponent />
    </div>
  );
}
