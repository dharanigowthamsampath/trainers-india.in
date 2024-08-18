import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Trainers India | Connect with Skilled Freelancers",
  description:
    "Trainers India is a premier platform connecting businesses with skilled freelancers across India. Post your job requirements or find your next freelance opportunity. Join our community of professionals today!",
  keywords:
    "freelance, India, job platform, hire freelancers, find jobs, trainers, skilled professionals",
  authors: [{ name: "Trainers India Team" }],
  openGraph: {
    title: "Trainers India - Your Gateway to Freelance Opportunities",
    description:
      "Connect with top freelancers or find your next project on Trainers India. Post jobs, apply for opportunities, and grow your career or business.",
    type: "website",
    url: "https://www.trainers-india.in", // Replace with your actual URL
    images: [
      {
        url: "https://www.trainers-india.in/OG_image.jpg", // Replace with your actual image URL
        width: 1200,
        height: 630,
        alt: "Trainers India Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trainers India | Connecting Talent with Opportunity",
    description:
      "Find skilled freelancers or exciting projects on Trainers India. Your one-stop platform for freelance success in India.",
    images: ["https://www.trainers-india.in/OG_image.jpg"], // Replace with your actual image URL
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={poppins.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
