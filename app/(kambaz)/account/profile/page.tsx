
"use client";

import { useRouter } from "next/navigation";
import { useAccount } from "../AccountContext";

export default function Profile() {
  const router = useRouter();
  const { currentUser, signout } = useAccount();

  if (!currentUser) {
    return null;
  }

  const handleSignout = () => {
    signout();
    router.push("/account/signin");
  };

  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>

      <input
        id="wd-username"
        placeholder="username"
        value={currentUser.username}
        readOnly
      />
      <br />

      <input
        id="wd-password"
        placeholder="password"
        type="password"
        value={currentUser.password}
        readOnly
      />
      <br />

      <input
        id="wd-firstname"
        placeholder="First Name"
        value={currentUser.firstName}
        readOnly
      />
      <br />

      <input
        id="wd-lastname"
        placeholder="Last Name"
        value={currentUser.lastName}
        readOnly
      />
      <br />

      <input
        id="wd-dob"
        type="date"
        value={currentUser.dob ?? ""}
        readOnly
      />
      <br />

      <input
        id="wd-email"
        type="email"
        placeholder="Email"
        value={currentUser.email ?? ""}
        readOnly
      />
      <br />

      <select
        id="wd-role"
        value={currentUser.role ?? "STUDENT"}
        disabled
      >
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
        <option value="TA">TA</option>
      </select>
      <br />

      <button
        type="button"
        id="wd-signout-btn"
        onClick={handleSignout}
      >
        Sign out
      </button>
    </div>
  );
}
