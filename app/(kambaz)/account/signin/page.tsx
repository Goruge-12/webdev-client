
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAccount } from "../AccountContext";

export default function Signin() {
  const router = useRouter();
  const { signin } = useAccount();

  const [username, setUsername] = useState("JoeSwanson12");
  const [password, setPassword] = useState("2134");

  const handleSignin = () => {
    if (!username.trim() || !password.trim()) {
      alert("Please enter a username and password.");
      return;
    }

    signin({
      username,
      password,
      firstName: "Joe",
      lastName: "Swanson",
      email: "student@northeastern.com",
      dob: "2026-09-27",
      role: "FACULTY",
    });

    router.push("/account/profile");
  };

  return (
    <div id="wd-signin-screen">
      <h3>Sign in</h3>

      <input
        placeholder="username"
        className="wd-username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />

      <input
        placeholder="password"
        type="password"
        className="wd-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />

      <button
        type="button"
        id="wd-signin-btn"
        onClick={handleSignin}
      >
        Sign in
      </button>
      <br />

      <Link href="/account/signup" id="wd-signup-link">
        Sign up
      </Link>
    </div>
  );
}
