import React from "react";
import SignOutButton from "../sign-out-button";
import UserInformation from "../user-information";

const Page = () => {
  return (
    <div>
      <h1>Account</h1>
      {/* @ts-ignore */}
      <UserInformation />
      <SignOutButton />
    </div>
  );
};

export default Page;
