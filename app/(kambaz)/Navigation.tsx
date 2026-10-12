import Link from "next/link";
import { FaUserCircle, FaTachometerAlt, FaBook, FaCalendarAlt, FaInbox, FaFlask } from "react-icons/fa";

export default function KambazNavigation() {
  return (
    <nav id="wd-kambaz-navigation" aria-label="Kambaz navigation">
      <h3>Kambaz</h3>
      <Link href="/account" id="wd-account-link"><FaUserCircle /><span>Account</span></Link>
      <Link href="/dashboard" id="wd-dashboard-link"><FaTachometerAlt /><span>Dashboard</span></Link>
      <Link href="/courses/1234/home" id="wd-courses-link"><FaBook /><span>Courses</span></Link>
      <Link href="/calendar" id="wd-calendar-link"><FaCalendarAlt /><span>Calendar</span></Link>
      <Link href="/inbox" id="wd-inbox-link"><FaInbox /><span>Inbox</span></Link>
      <Link href="/labs" id="wd-labs-link"><FaFlask /><span>Labs</span></Link>
    </nav>
  );
}
