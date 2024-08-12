import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full h-full flex justify-center items-center">
      <div className=" shadow-lg p-10">
        <div className="pb-4">
          <div className="font-extrabold text-2xl text-blue-800 text-center">
            TE
          </div>
          <div className="text-center">Trainers India</div>
        </div>

        <div className="pb-5 flex justify-center">
          <Link
            href={
              "https://accounts.trainers-india.in/sign-in?redirect_url=https://trainers-india.in/job"
            }
            className="px-10 border py-2 border-blue-600"
          >
            Explore Job
          </Link>
        </div>
        <div className=" text-xs font-medium text-gray-400">
          Build by a{" "}
          <Link
            href={"https://www.linkedin.com/in/dharani-gowtham/"}
            target="_blank"
          >
            Trainer
          </Link>{" "}
          for the Trainers
        </div>
      </div>
    </main>
  );
}
