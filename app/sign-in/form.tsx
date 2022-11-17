"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignIn = async () => {
    const response = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (response?.status === 200) {
      router.push("/");
      router.refresh();
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button onClick={handleSignIn}>Sign in</button>
      </div>
      <button onClick={() => signIn("github")}>Github</button>
    </div>
  );
};

export default Form;
