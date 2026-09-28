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
      >
        GitHub Repository
      </a>

      <h2>Lab Assignments</h2>

      <ul>
        <li>
          <Link href="/labs/lab1">Lab 1</Link>
        </li>
      </ul>
    </div>
  );
}