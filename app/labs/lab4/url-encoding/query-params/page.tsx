"use client";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
function QueryParams() {
  const params=useSearchParams();
  const a=Number(params.get("a") ?? 0);
  const b=Number(params.get("b") ?? 0);
  return <div><h2>Query Parameters</h2><p>{a} + {b} = {a+b}</p></div>;
}
export default function Page() {return <Suspense fallback={<p>Loading...</p>}><QueryParams /></Suspense>;}
