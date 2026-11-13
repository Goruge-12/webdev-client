
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAccount } from "../AccountContext";

export default function Signup() {
  const router = useRouter();
  const { signin } = useAccount();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");

  const handleSignup = () => {
    if (!username.trim() || !password.trim()) {
      alert("Please enter a username and password.");
      return;
    }

    if (password !== verifyPassword) {
      alert("Passwords do not match.");
      return;
    }

    signin({
      username,
      password,
      firstName: "",
      lastName: "",
      role: "STUDENT",
    });

    router.push("/account/profile");
  };

  return (
    <div id="wd-signup-screen">
      <h3>Sign up</h3>

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

      <input
        placeholder="verify password"
        type="password"
        className="wd-password-verify"
        value={verifyPassword}
        onChange={(e) => setVerifyPassword(e.target.value)}
      />
      <br />

      <button
        type="button"
        id="wd-signup-btn"
        onClick={handleSignup}
      >
        Sign up
      </button>
      <br />

      <Link href="/account/signin" id="wd-signin-link">
        Sign in
      </Link>
    </div>
  );
}
