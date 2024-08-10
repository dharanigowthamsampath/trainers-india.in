import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full h-full flex items-center justify-center">
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-5">
        <div className="px-4 py-2 bg-blue-600 text-white w-40 flex justify-center rounded-lg">
          <Link
            className="w-full h-full flex items-center justify-center text-base text-white"
            href={"/job"}
          >
            Add Job
          </Link>
        </div>
        <div className="px-4 py-2 bg-blue-600 text-white w-40 flex justify-center rounded-lg">
          <Link
            className="w-full h-full flex items-center justify-center text-base text-white"
            href={"/job"}
          >
            View Job
          </Link>
        </div>
      </div>
    </main>
  );
}
