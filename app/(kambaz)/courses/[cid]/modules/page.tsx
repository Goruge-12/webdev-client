
import ModulesClient from "./ModulesClient";

export default async function Modules({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;

  return <ModulesClient cid={cid} />;
}
