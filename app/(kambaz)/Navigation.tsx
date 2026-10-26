
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaUserCircle,
  FaTachometerAlt,
  FaBook,
  FaCalendarAlt,
  FaInbox,
  FaFlask,
} from "react-icons/fa";

export default function KambazNavigation() {
  const pathname = usePathname();

  const isActive = (path: string) =>
    pathname === path || pathname.startsWith(path + "/");

  const activeStyle = (path: string) => ({
    fontWeight: isActive(path) ? "bold" : "normal",
  });

  return (
    <nav id="wd-kambaz-navigation" aria-label="Kambaz navigation">
      <h3>Kambaz</h3>

      <Link href="/account" id="wd-account-link"
        style={activeStyle("/account")}>
        <FaUserCircle /><span>Account</span>
      </Link>

      <Link href="/dashboard" id="wd-dashboard-link"
        style={activeStyle("/dashboard")}>
        <FaTachometerAlt /><span>Dashboard</span>
      </Link>

      <Link href="/dashboard" id="wd-courses-link"
        style={activeStyle("/courses")}>
        <FaBook /><span>Courses</span>
      </Link>

      <Link href="/calendar" id="wd-calendar-link"
        style={activeStyle("/calendar")}>
        <FaCalendarAlt /><span>Calendar</span>
      </Link>

      <Link href="/inbox" id="wd-inbox-link"
        style={activeStyle("/inbox")}>
        <FaInbox /><span>Inbox</span>
      </Link>

      <Link href="/labs" id="wd-labs-link"
        style={activeStyle("/labs")}>
        <FaFlask /><span>Labs</span>
      </Link>
    </nav>
  );
}
