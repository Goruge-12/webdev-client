"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TOC() {
  const pathname = usePathname();

  const isActive = (path: string) =>
    pathname === path || pathname.startsWith(path + "/");

  return (
    <div>
      <h3>Labs</h3>

      <ul>
        {/* Book */}
        <li>
          <Link href="/labs" id="wd-home-link">
            Home
          </Link>
        </li>

        <li>
          <Link
            href="/labs/lab1"
            id="wd-lab1-link"
            aria-current={isActive("/labs/lab1") ? "page" : undefined}
            style={{ fontWeight: isActive("/labs/lab1") ? "bold" : "normal" }}
          >
            Lab 1
          </Link>
        </li>

        <li>
          <Link
            href="/labs/lab2"
            id="wd-lab2-link"
            aria-current={isActive("/labs/lab2") ? "page" : undefined}
            style={{ fontWeight: isActive("/labs/lab2") ? "bold" : "normal" }}
          >
            Lab 2
          </Link>
        </li>

        <li>
          <Link
            href="/labs/lab3"
            id="wd-lab3-link"
            aria-current={isActive("/labs/lab3") ? "page" : undefined}
            style={{ fontWeight: isActive("/labs/lab3") ? "bold" : "normal" }}
          >
            Lab 3
          </Link>
        </li>

        <li>
          <Link
            href="/labs/lab4"
            id="wd-lab4-toc-link"
            aria-current={isActive("/labs/lab4") ? "page" : undefined}
            style={{ fontWeight: isActive("/labs/lab4") ? "bold" : "normal" }}
          >
            Lab 4
          </Link>
        </li>

        <li>
          <Link
            href="/labs/lab5"
            id="wd-lab5-toc-link"
            aria-current={isActive("/labs/lab5") ? "page" : undefined}
            style={{ fontWeight: isActive("/labs/lab5") ? "bold" : "normal" }}
          >
            Lab 5
          </Link>
        </li>

        <li>
          <Link href="/dashboard" id="wd-kambaz-link">
            Kambaz
          </Link>
        </li>

        {/* With AI */}
        <li>
          <Link href="/book/ch1" id="wd-toc-book-link">
            Chapter 1
          </Link>
        </li>
      </ul>

      {/* On my own */}
      <p>Mario Lopez Perez</p>
      <p>Always learning and improving.</p>
    </div>
  );
}