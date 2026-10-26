
import { users, enrollments } from "../../../database";

export default async function People({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;

  const courseEnrollments = enrollments.filter(
    (enrollment) => enrollment.course === cid
  );

  const courseUsers = users.filter((user) =>
    courseEnrollments.some(
      (enrollment) => enrollment.user === user._id
    )
  );

  return (
    <div id="wd-people">
      <h2>People</h2>

      <div className="wd-people-toolbar">
        <input
          type="search"
          placeholder="Search people"
          aria-label="Search people"
        />
        <button type="button">+ People</button>
        <button type="button">+ Group</button>
      </div>

      <table className="wd-people-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Role</th>
            <th>Section</th>
          </tr>
        </thead>

        <tbody>
          {courseUsers.map((user) => (
            <tr key={user._id}>
              <td>
                {user.firstName} {user.lastName}
              </td>
              <td>{user._id}</td>
              <td>{user.role}</td>
              <td>Web Development</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
