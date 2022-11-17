import useAuth from "../hooks/use-auth";

const UserInformation = async () => {
  const session = await useAuth();
  return <div>{session?.user?.name}</div>;
};

export default UserInformation;
