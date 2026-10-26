
import People from "../page";

export default async function PeopleTable({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;

  return (
    <div id="wd-people-table">
      <People params={Promise.resolve({ cid })} />
    </div>
  );
}
