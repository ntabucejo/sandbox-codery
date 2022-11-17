import Link from "next/link";
import useAuth from "../hooks/use-auth";
import SignOutButton from "./sign-out-button";
import UserInformation from "./user-information";

const Page = async () => {
  const session = await useAuth();

  return (
    <div>
      <h1>Home</h1>
      {session ? (
        <>
          {/* @ts-ignore */}
          <UserInformation />
          <SignOutButton />
        </>
      ) : null}
    </div>
  );
};

export default Page;
