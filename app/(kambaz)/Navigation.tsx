import Link from "next/link";

export default function KambazNavigation() {
  return (
    <div id="wd-kambaz-navigation">
      <h3>Kambaz</h3>

      <Link href="/account" id="wd-account-link">
        Account
      </Link>
      <br />

      <Link href="/dashboard" id="wd-dashboard-link">
        Dashboard
      </Link>
      <br />

      <Link href="/courses/1234/home" id="wd-courses-link">
        Courses
      </Link>
      <br />

      <Link href="/calendar" id="wd-calendar-link">
        Calendar
      </Link>
      <br />

      <Link href="/inbox" id="wd-inbox-link">
        Inbox
      </Link>
      <br />

      <Link href="/labs" id="wd-labs-link">
        Labs
      </Link>
    </div>
  );
}