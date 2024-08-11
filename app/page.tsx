import Link from "next/link";

export default function Home() {
  return (
    // <main className="w-full h-screen flex items-center justify-center bg-gray-100">
    //   <div className="bg-white shadow-lg p-8 w-96">
    //     <h1 className="text-3xl font-bold mb-6 text-center">Trainers India</h1>
    //     <div className="space-y-4 mb-6">
    //       <Link
    //         href="/explore-job"
    //         className="bg-blue-500 text-white px-8 py-3 w-full block text-center hover:bg-blue-600 transition duration-300"
    //       >
    //         Explore Job
    //       </Link>
    //       <Link
    //         href="/add-job"
    //         className="bg-blue-500 text-white px-8 py-3 w-full block text-center hover:bg-blue-600 transition duration-300"
    //       >
    //         Add Job
    //       </Link>
    //     </div>
    //     <p className="text-gray-600 italic text-center text-sm">
    //       Built by a trainer for the trainers
    //     </p>
    //   </div>
    // </main>
    <main className="w-full h-full flex justify-center items-center">
      <div className=" shadow-lg p-10">
        <div className="pb-4">
          <div className="font-extrabold text-2xl text-blue-800 text-center">
            TE
          </div>
          <div className="text-center">Trainers India</div>
        </div>

        <div className="pb-5 flex justify-center">
          <Link href={"/job"} className="px-10 border py-2 border-blue-600">
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
