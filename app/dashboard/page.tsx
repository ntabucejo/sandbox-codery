import useAuth from "../../hooks/use-auth";
import SignOutButton from "../sign-out-button";

const Page = async () => {
  const session = await useAuth();

  return (
    <div>
      <h1>Dashboard</h1>
      {session?.user?.name}{" "}
      <div>
        <SignOutButton />
      </div>
    </div>
  );
};

export default Page;
