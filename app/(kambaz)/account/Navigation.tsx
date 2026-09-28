import Link from "next/link";

export default function AccountNavigation() {
  return (
    <div id="wd-account-navigation">
      <h3>Account</h3>

      <Link href="/account/signin" id="wd-account-signin-link">
        Sign in
      </Link>
      <br />

      <Link href="/account/signup" id="wd-account-signup-link">
        Sign up
      </Link>
      <br />

      <Link href="/account/profile" id="wd-account-profile-link">
        Profile
      </Link>
    </div>
  );
}