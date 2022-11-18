import useAuth from "../../hooks/use-auth";

const getUser = async ({ email }: { email: string | undefined | null }) => {
  const user = await prisma.user.findUnique({
    where: { email: email! },
  });
  return user;
};

const Page = async () => {
  const session = await useAuth();
  const user = await getUser({ email: session?.user?.email });

  return (
    <div>
      <h1>Seller</h1>
      <h2>{user?.name}</h2>
    </div>
  );
};

export default Page;
