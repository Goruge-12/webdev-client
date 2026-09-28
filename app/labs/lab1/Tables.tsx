export default function Tables() {
  return (
    <div id="wd-tables">
      <h4>Table Tag</h4>

      {/* BOOK + WITH AI */}
      <table border={1} width="100%">
        <thead>
          <tr>
            <th>Quiz</th>
            <th align="center">Topic</th>
            <th align="center">Date</th>
            <th>Grade</th>
          </tr>
        </thead>

        <tbody>
          {/* BOOK */}
          <tr>
            <td>Q1</td>
            <td align="center">HTML</td>
            <td align="center">2/3/21</td>
            <td align="right">85</td>
          </tr>

          <tr>
            <td>Q2</td>
            <td align="center">CSS</td>
            <td align="center">2/10/21</td>
            <td align="right">90</td>
          </tr>

          <tr>
            <td>Q3</td>
            <td align="center">JavaScript</td>
            <td align="center">2/17/21</td>
            <td align="right">95</td>
          </tr>

          {/* With AI */}
          <tr>
            <td>Q4</td>
            <td align="center">React</td>
            <td align="center">2/24/21</td>
            <td align="right">88</td>
          </tr>

          <tr>
            <td>Q5</td>
            <td align="center">Next.js</td>
            <td align="center">3/3/21</td>
            <td align="right">92</td>
          </tr>

          <tr>
            <td>Q6</td>
            <td align="center">Forms</td>
            <td align="center">3/10/21</td>
            <td align="right">87</td>
          </tr>

          <tr>
            <td>Q7</td>
            <td align="center">Bootstrap</td>
            <td align="center">3/17/21</td>
            <td align="right">91</td>
          </tr>

          <tr>
            <td>Q8</td>
            <td align="center">JavaScript ES6</td>
            <td align="center">3/24/21</td>
            <td align="right">94</td>
          </tr>

          <tr>
            <td>Q9</td>
            <td align="center">Routing</td>
            <td align="center">3/31/21</td>
            <td align="right">89</td>
          </tr>

          <tr>
            <td>Q10</td>
            <td align="center">Web APIs</td>
            <td align="center">4/7/21</td>
            <td align="right">93</td>
          </tr>
        </tbody>

        <tfoot>
          <tr>
            <td colSpan={3}>Average</td>
            <td align="right">90.4</td>
          </tr>
        </tfoot>
      </table>

      {/* On my own */}
      <h4>My Fall 2026 Courses</h4>

      <table id="wd-your-table" border={1} width="100%">
        <thead>
          <tr>
            <th>Course</th>
            <th>Course Name</th>
            <th>Instructor</th>
            <th>Schedule</th>
            <th>Location</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td align="center">CS 5010</td>
            <td>Programming Design Paradigm</td>
            <td>Joydeep Mitra</td>
            <td>Tuesday & Friday, 3:25 p.m. - 5:05 p.m.</td>
            <td>Richards Hall, Room 236</td>
          </tr>

          <tr>
            <td align="center">CS 5011</td>
            <td>Recitation for CS 5010</td>
            <td>Joydeep Mitra</td>
            <td>Monday, 6:00 p.m. - 7:30 p.m.</td>
            <td>Dodge Hall, Room 330</td>
          </tr>

          <tr>
            <td align="center">CS 5610</td>
            <td>Web Development</td>
            <td>Jose Annunziato</td>
            <td>Online - No time specified</td>
            <td>Online</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}