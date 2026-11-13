"use client";
import Link from "next/link";
export default function UrlEncoding() {
  return <section><h3>16. URL Parameters</h3><p><Link href="/labs/lab4/url-encoding/query-params?a=5&b=7">Query parameters: a=5, b=7</Link></p><p><Link href="/labs/lab4/url-encoding/path-params/5/7">Path parameters: 5 and 7</Link></p><hr /></section>;
}
