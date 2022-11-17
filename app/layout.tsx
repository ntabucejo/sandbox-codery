import Link from "next/link";
import useAuth from "../hooks/use-auth";
import Providers from "./providers";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await useAuth();

  return (
    <html>
      <head />
      <body>
        <Link href="/">Home</Link>
        <Providers>
          {!session ? (
            <ul>
              <li>
                <Link href="/sign-in">Sign in</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
            </ul>
          ) : (
            <ul>
              <li>
                <Link href="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link href="/account">Account</Link>
              </li>
              <li>
                <Link href="/seller">Seller</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
            </ul>
          )}
          {children}
        </Providers>
      </body>
    </html>
  );
};

export default Layout;
