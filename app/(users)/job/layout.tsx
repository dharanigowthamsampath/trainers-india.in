"use client";
import SidebarMenu from "@/components/client/sidebar";
import { usePathname } from "next/navigation";

const jobTabs = [
  { id: "explore", label: "Updates", href: "/job/explore" },
  { id: "add", label: "Add Post", href: "/job/add-job" },
];

export default function JobLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Determine the active tab based on the current pathname
  const activeTab =
    jobTabs.find(
      (tab) =>
        pathname === tab.href ||
        (tab.href === "/job/explore" && pathname === "/job")
    )?.id || "explore";

  return (
    <div className="w-full h-[calc(100vh-50px)] flex flex-col mt-1">
      <div className="w-full bg-white mb-1">
        <SidebarMenu tabs={jobTabs} activeTab={activeTab} />
      </div>
      <div className="w-full flex-grow overflow-hidden">{children}</div>
    </div>
  );
}
