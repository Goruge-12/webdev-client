
"use client";

import { useState } from "react";

export default function BooleanStateVariables() {
  const [done, setDone] = useState(false);

  return (
    <div id="wd-boolean-state-variables">
      <h2>Boolean State Variables</h2>

      <input
        type="checkbox"
        id="wd-done"
        checked={done}
        onChange={(event) => setDone(event.target.checked)}
      />

      <label htmlFor="wd-done" className="ms-2">
        Done
      </label>

      <p>Done: {done ? "true" : "false"}</p>

      {done && <p>Great job! Task completed.</p>}

      <hr />
    </div>
  );
}
