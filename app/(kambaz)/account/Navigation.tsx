import Link from "next/link";

export default function AccountNavigation() {
  return (
    <nav id="wd-account-navigation" aria-label="Account navigation">
      <h3>Account</h3>
      <Link href="/account/signin" id="wd-account-signin-link">Sign in</Link>
      <Link href="/account/signup" id="wd-account-signup-link">Sign up</Link>
      <Link href="/account/profile" id="wd-account-profile-link">Profile</Link>
    </nav>
  );
}
