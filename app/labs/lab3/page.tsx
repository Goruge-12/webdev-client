
import Link from "next/link";
import Add from "./Add";
import ClientExamples from "./ClientExamples";
import ServerInformation from "./ServerInformation";
import TodoList from "./todos/TodoList";
import mathObject from "./math";
import * as namespace from "./mathFunctions";
import { add as namedAdd } from "./math";
import "./index.css";

const house = {
  rooms: 3,
  bathrooms: 2,
  owners: ["Mario", "Alex"],
  address: { city: "Boston", state: "MA" },
};

const numbers = [1, 2, 3, 4];

const bgRed = {
  backgroundColor: "#b52525",
  color: "white",
  padding: 12,
};

const bgBlue = {
  backgroundColor: "#245bb2",
  color: "white",
  padding: 12,
};

const bgYellow = {
  backgroundColor: "#c29c17",
  padding: 12,
};

const bgGreen = {
  backgroundColor: "#23803b",
  color: "white",
  padding: 12,
};

export default function Lab3() {
  const score = 85;
  const isLoggedIn = false;
  const hour = 9;
  const nullValue: string | null = null;
  const { rooms, bathrooms, owners } = house;
  const [first, second] = numbers;

  return (
    <main id="wd-lab3" className="wd-lab3">
      <h1>Lab 3 - JavaScript and React</h1>

      <p>
        Mario Lopez Perez |{" "}
        <a href="https://github.com/Goruge-12/webdev-client">
          GitHub Repository
        </a>
      </p>

      <section>
        <h3>3.2 JavaScript Fundamentals</h3>
        <p>Variables, conditions, and expressions</p>
      </section>

      <section>
        <h3>Variables</h3>
        <p>Score: {score}</p>
      </section>

      <section>
        <h3>Functions</h3>
        <p>add(2, 3) = {namedAdd(2, 3)}</p>
      </section>

      <section>
        <h3>If Else</h3>
        <p>{score >= 60 ? "Passed" : "Failed"}</p>
        <p>{isLoggedIn ? "Logged in" : "Not logged in"}</p>
        <p>not false1</p>
      </section>

      <section>
        <h3>Ternary Operator</h3>
        <p>{score >= 60 ? "Pass" : "Fail"}</p>
        <p>{hour < 12 ? "Good morning" : "Good afternoon"}</p>
      </section>

      <section>
        <h3>Inline Conditional</h3>
        <p>{score > 70 && "Score is above 70"}</p>
        <p>{!isLoggedIn && "Guest Inline"}</p>
      </section>

      <section>
        <h3>Nullish Coalescing</h3>
        <p>nullValue ?? &quot;default&quot; = {nullValue ?? "default"}</p>
      </section>

      <section>
        <h3>3.3 Arrays</h3>
        <p>{numbers.join(", ")}</p>
      </section>

      <section>
        <h3>Array Map</h3>
        <ul>
          {numbers.map((n) => (
            <li key={n}>Number {n}</li>
          ))}
        </ul>
      </section>

      <section>
        <h3>Array Filter</h3>
        <p>{numbers.filter((n) => n % 2 === 0).join(", ")}</p>
      </section>

      <section>
        <h3>3.4 Objects</h3>
        <p>
          House in {house.address.city}, {house.address.state}
        </p>
      </section>

      <section>
        <h3>Object Properties</h3>
        <p>Rooms: {rooms}</p>
        <p>Bathrooms: {bathrooms}</p>
      </section>

      <section>
        <h3>JSON.stringify</h3>
        <pre>{JSON.stringify(house, null, 2)}</pre>
      </section>

      <section>
        <h3>Destructuring</h3>
        <p>
          First: {first}, Second: {second}
        </p>
        <p>Rooms: {rooms}</p>
        <h5>owners</h5>
        <p>{owners.join(", ")}</p>
      </section>

      <section>
        <h3>Destructuring Imports</h3>
        <table>
          <thead>
            <tr>
              <th>Default object</th>
              <th>Namespace</th>
              <th>Named functions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>mathObject.add</td>
              <td>namespace.add</td>
              <td>namedAdd</td>
            </tr>
            <tr>
              <td>{mathObject.add(2, 3)}</td>
              <td>{namespace.add(2, 3)}</td>
              <td>{namedAdd(2, 3)}</td>
            </tr>
            <tr>
              <td>{mathObject.add(5, 6)}</td>
              <td>{namespace.add(5, 6)}</td>
              <td>{namedAdd(5, 6)}</td>
            </tr>
            <tr>
              <td>{mathObject.add(7, 8)}</td>
              <td>{namespace.add(7, 8)}</td>
              <td>{namedAdd(7, 8)}</td>
            </tr>
            <tr>
              <td>{mathObject.add(10, 20)}</td>
              <td>{namespace.add(10, 20)}</td>
              <td>{namedAdd(10, 20)}</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h3>Optional Chaining</h3>
        <p>
          house.garage?.cars ?? 0 ={" "}
          {(house as typeof house & {
            garage?: { cars: number };
          }).garage?.cars ?? 0}
        </p>
      </section>

      <section>
        <h3>3.5 React Components</h3>
        <p>Each section on this page is rendered with React.</p>
      </section>

      <section>
        <h3>3.6 CSS Classes</h3>
        {["red", "blue", "green", "yellow", "purple", "orange"].map(
          (color, i) => (
            <div key={color} className={`wd-box wd-${color}`}>
              Box {i + 1}
            </div>
          )
        )}
      </section>

      <section>
        <h3>3.6 Style Objects</h3>
        {[bgRed, bgBlue, bgYellow, bgGreen].map((style, i) => (
          <div key={i} style={style}>
            Style box {i + 1}
          </div>
        ))}
      </section>

      <section>
        <h3>3.7 Client and Server Components</h3>
        <p>
          Client components run interactive code. Server components can
          read files.
        </p>
      </section>

      <ClientExamples />
      <ServerInformation />
      <TodoList />

      <section>
        <h3>3.8 Reusable Components</h3>
        <Add a={2} b={3} />
        <Add a={10} b={20} />
      </section>

      <section>
        <h3>Path Parameters</h3>
        <ul>
          {[[12, 30], [5, 7], [10, 20]].map(([a, b]) => (
            <li key={`${a}-${b}`}>
              <Link href={`/labs/lab3/add/${a}/${b}`}>
                Add {a} and {b}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <p>
        <Link href="/dashboard">Go to Kambaz Dashboard</Link>
      </p>
    </main>
  );
}
