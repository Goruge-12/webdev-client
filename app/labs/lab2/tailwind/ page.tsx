
import Link from "next/link";
import TailwindSamples from "./TailwindSamples";

export default function TailwindPage() {
  return (
    <div id="wd-tailwind" className="p-4">
      <h1 className="text-3xl font-bold">
        Tailwind CSS
      </h1>

      <p className="my-4">
        <Link href="/labs/lab2">
          Back to Lab 2
        </Link>
      </p>

      <TailwindSamples />
    </div>
  );
}
