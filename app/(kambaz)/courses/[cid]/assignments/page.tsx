
import AssignmentItem from "./AssignmentItem";
import { assignments } from "../../../database";

export default async function Assignments({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;

  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === cid
  );

  return (
    <div id="wd-assignments">
      <input
        id="wd-search-assignment"
        placeholder="Search for Assignments"
      />{" "}

      <button id="wd-add-assignment-group">
        + Group
      </button>{" "}

      <button id="wd-add-assignment">
        + Assignment
      </button>

      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total{" "}
        <button>+</button>
      </h3>

      <ul id="wd-assignment-list">
        {courseAssignments.map((assignment) => (
          <AssignmentItem
            key={assignment._id}
            cid={cid}
            aid={assignment._id}
            title={assignment.title}
            details="Multiple Modules | 100 pts"
          />
        ))}
      </ul>
    </div>
  );
}
