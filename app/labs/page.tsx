import Link from "next/link";

export default function Labs() {
  return (
    <div id="wd-labs">
      <h1>Labs</h1>

      <h2>Mario Lopez Perez</h2>

      <a
        id="wd-github"
        href="https://github.com/Goruge-12/webdev-client"
        target="_blank"
        rel="noopener noreferrer"
      >
        My GitHub Repository
      </a>

      <ul>
        {/* Book */}
        <li>
          <Link href="/labs/lab1">Lab 1: HTML Examples</Link>
        </li>

        <li>
          <Link href="/labs/lab2">Lab 2</Link>
        </li>

        <li>
          <Link href="/labs/lab3">Lab 3: JavaScript Fundamentals</Link>
        </li>

        {/* On my own */}
        <li>
          <Link href="/labs/lab4" id="wd-lab4-link">
            Lab 4
          </Link>
        </li>

        {/* With AI */}
        <li>
          <Link href="/labs/lab5">Lab 5</Link>
        </li>

        <li>
          <Link href="/dashboard">Kambaz</Link>
        </li>
      </ul>
    </div>
  );
}