import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Trainers India | Connect with Skilled Trainers",
  description:
    "Trainers India is a premier platform connecting businesses with skilled trainers across India. Post your training requirements or find your next training opportunity. Join our community of professionals today!",
  keywords:
    "trainers, India, job platform, hire trainers, find training jobs, technical trainers, skill development",
  authors: [{ name: "Trainers India Team" }],
  openGraph: {
    title: "Trainers India - Your Gateway to Training Opportunities",
    description:
      "Connect with top trainers or find your next project on Trainers India. Post training requirements, apply for opportunities, and grow your career or business.",
    type: "website",
    url: "https://www.trainers-india.in",
    images: [
      {
        url: "https://www.trainers-india.in/OG_image.jpg",
        width: 1200,
        height: 630,
        alt: "Trainers India Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trainers India | Connecting Expertise with Opportunity",
    description:
      "Find skilled trainers or exciting projects on Trainers India. Your one-stop platform for training success in India.",
    images: ["https://www.trainers-india.in/OG_image.jpg"],
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
