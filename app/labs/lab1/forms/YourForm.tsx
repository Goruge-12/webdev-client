export default function MyForm() {
  return (
    <>
      {/* On my own / With AI */}
      <h4>My Student Profile</h4>

      <form id="wd-your-form">
        <h5>Student Information</h5>

        <label htmlFor="wd-your-first-name">First name: </label>
        <input
          type="text"
          id="wd-your-first-name"
          defaultValue="Mario"
        />
        <br />

        <label htmlFor="wd-your-last-name">Last name: </label>
        <input
          type="text"
          id="wd-your-last-name"
          defaultValue="Lopez Perez"
        />
        <br />

        <label htmlFor="wd-your-student-id">Student ID: </label>
        <input
          type="password"
          id="wd-your-student-id"
          placeholder="Enter student ID"
        />
        <br />

        <h5>About Me</h5>

        <label htmlFor="wd-your-bio">
          Why I am taking CS 5610:
        </label>
        <br />
        <textarea
          id="wd-your-bio"
          cols={40}
          rows={5}
          defaultValue="I am taking Web Development to improve my full-stack development skills."
        />

        <h5>Class Standing</h5>

        <input
          type="radio"
          id="wd-your-undergraduate"
          name="class-standing"
          value="UNDERGRADUATE"
        />
        <label htmlFor="wd-your-undergraduate">
          Undergraduate
        </label>
        <br />

        <input
          type="radio"
          id="wd-your-graduate"
          name="class-standing"
          value="GRADUATE"
          defaultChecked
        />
        <label htmlFor="wd-your-graduate">
          Graduate
        </label>
        <br />

        <h5>Student Status</h5>

        <input
          type="radio"
          id="wd-your-full-time"
          name="student-status"
          value="FULL_TIME"
          defaultChecked
        />
        <label htmlFor="wd-your-full-time">
          Full-time
        </label>
        <br />

        <input
          type="radio"
          id="wd-your-part-time"
          name="student-status"
          value="PART_TIME"
        />
        <label htmlFor="wd-your-part-time">
          Part-time
        </label>
        <br />

        <h5>Interests</h5>

        <input
          type="checkbox"
          id="wd-your-web-development"
          defaultChecked
        />
        <label htmlFor="wd-your-web-development">
          Web Development
        </label>
        <br />

        <input
          type="checkbox"
          id="wd-your-software-engineering"
          defaultChecked
        />
        <label htmlFor="wd-your-software-engineering">
          Software Engineering
        </label>
        <br />

        <input
          type="checkbox"
          id="wd-your-cloud-computing"
          defaultChecked
        />
        <label htmlFor="wd-your-cloud-computing">
          Cloud Computing
        </label>
        <br />

        <h5>Major</h5>

        <label htmlFor="wd-your-major">Major: </label>
        <select
          id="wd-your-major"
          defaultValue="CS"
        >
          <option value="CS">Computer Science</option>
          <option value="DS">Data Science</option>
          <option value="CY">Cybersecurity</option>
          <option value="IS">Information Systems</option>
        </select>

        <h5>Topics I Want to Learn More About</h5>

        <label htmlFor="wd-your-topics">
          Select topics:
        </label>
        <br />

        <select
          id="wd-your-topics"
          multiple
          defaultValue={["REACT", "NODE", "DATABASES"]}
        >
          <option value="REACT">React</option>
          <option value="NODE">Node.js</option>
          <option value="DATABASES">Databases</option>
          <option value="TYPESCRIPT">TypeScript</option>
        </select>

        <h5>Additional Student Information</h5>

        <label htmlFor="wd-your-email">
          School email:{" "}
        </label>
        <input
          type="email"
          id="wd-your-email"
          defaultValue="lopezperez.m@northeastern.edu"
        />
        <br />

        <label htmlFor="wd-your-graduation">
          Expected graduation year:{" "}
        </label>
        <input
          type="number"
          id="wd-your-graduation"
          min={2026}
          max={2035}
          defaultValue={2027}
        />
        <br />

        <label htmlFor="wd-your-start-date">
          Program start date:{" "}
        </label>
        <input
          type="date"
          id="wd-your-start-date"
          defaultValue="2026-09-01"
        />
        <br />

        <label htmlFor="wd-your-excitement">
          Excitement for CS 5610 (0-10):{" "}
        </label>
        <input
          type="range"
          id="wd-your-excitement"
          min="0"
          max="10"
          defaultValue="8"
        />
        <br />

        <button id="wd-your-save" type="submit">
          Save
        </button>

        <button id="wd-your-cancel" type="button">
          Cancel
        </button>
      </form>
    </>
  );
}