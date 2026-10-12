export default function People() {
  return (
    <div id="wd-people">
      <h2>People</h2>
      <div className="wd-people-toolbar">
        <input type="search" placeholder="Search people" aria-label="Search people" />
        <button type="button">+ People</button>
        <button type="button">+ Group</button>
      </div>
      <table className="wd-people-table">
        <thead><tr><th>Name</th><th>Login ID</th><th>Role</th><th>Section</th></tr></thead>
        <tbody>
          <tr><td>Joe Swanson</td><td>JoeSwanson12</td><td>Faculty</td><td>Web Development</td></tr>
          <tr><td>Student One</td><td>student1</td><td>Student</td><td>Web Development</td></tr>
          <tr><td>Student Two</td><td>student2</td><td>Student</td><td>Web Development</td></tr>
        </tbody>
      </table>
    </div>
  );
}
