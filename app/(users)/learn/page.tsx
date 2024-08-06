import ComingSoon from "@/components/coming-soon";
import Loader from "@/components/loader";
import { checkUser } from "@/lib/checkUsers";
import React, { Suspense } from "react";

type Props = {};

// const UserInfo = async () => {
//   const user = await checkUser();
//   return (
//     <>
//       <div>Emailid = {user?.emailId}</div>
//       <div>ClerkUserId = {user?.clerkUserId}</div>
//       <div>UserId = {user?.id}</div>
//       <div>UserName = {user?.name}</div>
//     </>
//   );
// };

const LearnPage = (props: Props) => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      {/* <Suspense fallback={<Loader size="medium" color="gray-900" />}>
        <UserInfo />
      </Suspense> */}
      <Loader size="medium" color="gray-900" />
      <ComingSoon />
    </div>
  );
};

export default LearnPage;
