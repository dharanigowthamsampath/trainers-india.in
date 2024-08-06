import { checkUser } from "@/lib/checkUsers";
import React from "react";

type Props = {};

const MenuBlock = async (props: Props) => {
  const user = await checkUser();

  return <div className="w-full h-full">Logo</div>;
};

export default MenuBlock;
