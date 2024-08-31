import Link from "next/link";
import React from "react";

type Props = {};

const HomePageMenu = (props: Props) => {
  return (
    <div className="w-[1280px] h-fit flex justify-around items-center">
      <div className="flex space-x-2 text-sm">
        <Link href={"/"}>
          <div className="px-4 py-2 hover:bg-blue-800 hover:text-white">
            Find trainer
          </div>
        </Link>
        <Link href={"/"}>
          <div className="px-4 py-2 hover:bg-blue-800 hover:text-white">
            Post work
          </div>
        </Link>
      </div>
      <div className="text-2xl px-4 py-2 ">
        <span className="font-black text-green-500">T</span>
        <span className="font-black text-blue-500">E</span>
      </div>
      <div className="flex space-x-2 text-sm">
        <Link href={"/"}>
          <div className="px-4 py-2 hover:bg-blue-800 hover:text-white">
            Find trainer
          </div>
        </Link>
        <Link href={"/"}>
          <div className="px-4 py-2 hover:bg-blue-800 hover:text-white">
            Find trainer
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomePageMenu;
