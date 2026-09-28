export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>

      <input
        id="wd-username"
        placeholder="username"
        defaultValue="JoeSwanson12"
      />
      <br />

      <input
        id="wd-password"
        placeholder="password"
        type="password"
        defaultValue="2134"
      />
      <br />

      <input
        id="wd-firstname"
        placeholder="First Name"
        defaultValue="Joe"
      />
      <br />

      <input
        id="wd-lastname"
        placeholder="Last Name"
        defaultValue="Swanson"
      />
      <br />

      <input
        id="wd-dob"
        type="date"
        defaultValue="2026-09-27"
      />
      <br />

      <input
        id="wd-email"
        type="email"
        placeholder="Email"
        defaultValue="student@northeastern.com"
      />
      <br />

      <select id="wd-role" defaultValue="FACULTY">
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
        <option value="TA">TA</option>
      </select>
      <br />

      <button id="wd-signout-btn">
        Sign out
      </button>
    </div>
  );
}