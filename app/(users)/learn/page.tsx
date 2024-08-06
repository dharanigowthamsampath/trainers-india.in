import ComingSoon from "@/components/coming-soon";
import Loader from "@/components/loader";
import { checkUser } from "@/lib/checkUsers";
import React, { Suspense } from "react";

type Props = {};

const UserInfo = async () => {
  const user = await checkUser();
  return (
    <>
      <div>{user?.emailId}</div>
      <div>{user?.clerkUserId}</div>
      <div>{user?.id}</div>
      <div>{user?.name}</div>
    </>
  );
};

const LearnPage = (props: Props) => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <Suspense fallback={<Loader size="medium" color="gray-900" />}>
        <UserInfo />
      </Suspense>
      <ComingSoon />
    </div>
  );
};

export default LearnPage;
