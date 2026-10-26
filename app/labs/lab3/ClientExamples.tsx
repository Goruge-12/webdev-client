
"use client";

import { usePathname } from "next/navigation";

export default function ClientExamples() {
  const pathname = usePathname();

  return (
    <section>
      <h3>Client Component and Pathname</h3>
      <p>Current pathname: {pathname}</p>
      <p>Pathname length: {pathname.length}</p>
    </section>
  );
}
