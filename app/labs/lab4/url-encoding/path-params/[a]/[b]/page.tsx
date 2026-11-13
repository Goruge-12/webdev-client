export default async function Page({params}:{params:Promise<{a:string;b:string}>}) {
  const {a,b}=await params;
  const first=Number(a),second=Number(b);
  return <div><h2>Path Parameters</h2><p>{first} + {second} = {first+second}</p></div>;
}
