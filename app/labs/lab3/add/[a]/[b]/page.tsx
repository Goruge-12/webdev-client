import Link from "next/link";
export default async function AddPage({params}:{params:Promise<{a:string;b:string}>}) {
 const {a,b} = await params; const left=Number(a); const right=Number(b);
 return <main><h1>Path Parameters</h1><p>{Number.isFinite(left)&&Number.isFinite(right) ? `${left} + ${right} = ${left+right}` : "Please use two numbers."}</p><Link href="/labs/lab3">Back to Lab 3</Link></main>;
}
