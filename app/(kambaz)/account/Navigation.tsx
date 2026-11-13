
"use client";

import Link from "next/link";
import { useAccount } from "./AccountContext";

export default function AccountNavigation() {
  const { currentUser } = useAccount();

  return (
    <nav
      id="wd-account-navigation"
      aria-label="Account navigation"
    >
      <h3>Account</h3>

      {!currentUser && (
        <>
          <Link
            href="/account/signin"
            id="wd-account-signin-link"
          >
            Sign in
          </Link>

          <Link
            href="/account/signup"
            id="wd-account-signup-link"
          >
            Sign up
          </Link>
        </>
      )}

      {currentUser && (
        <Link
          href="/account/profile"
          id="wd-account-profile-link"
        >
          Profile
        </Link>
      )}
    </nav>
  );
}
