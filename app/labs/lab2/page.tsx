
import Link from "next/link";
import "./index.css";
import ForegroundColors from "./ForegroundColors";
import BackgroundColors from "./BackgroundColors";
import Borders from "./Borders";
import Padding from "./Padding";
import Margins from "./Margins";
import BoxModel from "./BoxModel";
import Corners from "./Corners";
import Dimensions from "./Dimensions";
import Display from "./Display";
import Positions from "./Positions";
import Zindex from "./Zindex";
import Float from "./Float";
import GridLayout from "./GridLayout";
import Flex from "./Flex";
import MediaQueriesDemo from "./MediaQueriesDemo";
import ReactIconsSampler from "./ReactIconsSampler";

export default function Lab2() {
  return (
    <div id="wd-lab2">
      <h2>Lab 2 - Cascading Style Sheets</h2>

      <h3>Styling with the STYLE attribute</h3>
      <p>
        Style attribute allows configuring look and feel right on the element.
        Although it&apos;s convenient, it is considered bad practice.
      </p>

      <h3>On my own</h3>
      <p style={{ backgroundColor: "green", color: "yellow" }}>
        This paragraph has a green background and yellow text.
      </p>

      <h3>With AI</h3>
      <p
        id="wd-ai-style-attr"
        style={{ backgroundColor: "purple", color: "white" }}
      >
        This paragraph has a purple background and white text.
      </p>

      <div id="wd-css-id-selectors">
        <h3>ID selectors</h3>
        <p id="wd-id-selector-1">
          Instead of changing all paragraphs, we can target a specific ID.
        </p>
        <p id="wd-id-selector-2">
          Here&apos;s another paragraph using a different ID.
        </p>

        <h4>On my own</h4>
        <p id="wd-id-selector-3">My own ID selector.</p>

        <h4>With AI</h4>
        <p id="wd-ai-id-selector">Another ID selector.</p>
      </div>

      <div id="wd-css-class-selectors">
        <h3>Class selectors</h3>
        <p className="wd-class-selector">
          A class can style multiple elements.
        </p>
        <h4 className="wd-class-selector">
          This heading uses the same class.
        </h4>

        <h4>On my own</h4>
        <p className="wd-your-class">My own class selector.</p>
        <h4 className="wd-your-class">
          Another element with my class.
        </h4>

        <h4>With AI</h4>
        <p className="wd-ai-class-selector">AI class selector.</p>
        <h4 className="wd-ai-class-selector">
          Another element with that class.
        </h4>
      </div>

      <div id="wd-css-document-structure">
        <div className="wd-selector-1">
          <h3>Document structure selectors</h3>
          <div className="wd-selector-2">
            Selectors can target descendants.
            <p className="wd-selector-3">
              This paragraph is a descendant of .wd-selector-1.
              <br />
              <span className="wd-selector-4">
                This span is a direct child.
              </span>
              <br />
              <span className="wd-your-selector-5">
                On my own: descendant selector.
              </span>
              <br />
              <span className="wd-ai-selector-5">
                With AI: another descendant selector.
              </span>
            </p>
          </div>
        </div>
      </div>

      <div id="wd-css-selection-rules">
        <h3>CSS selection rule mechanism</h3>

        <h4>On my own</h4>
        <p id="wd-your-cascade" className="wd-your-cascade">
          The ID selector wins and makes this blue.
        </p>

        <h4>With AI</h4>
        <p id="wd-ai-cascade" className="wd-ai-cascade">
          The ID selector wins and makes this red.
        </p>
      </div>

      <ForegroundColors />
      <BackgroundColors />
      <Borders />
      <Padding />
      <Margins />
      <BoxModel />
      <Corners />
      <Dimensions />
      <Display />
      <Positions />

      <div id="wd-css-fixed-position">
        <h3>Fixed position</h3>
        <p>This box stays in the same place when scrolling.</p>
        <div className="wd-css-position-fixed">
          Fixed position
        </div>
      </div>

      <Zindex />
      <Float />
      <GridLayout />
      <Flex />
      <MediaQueriesDemo />
      <ReactIconsSampler />

      <hr />

      <h3>Tailwind CSS</h3>
      <Link href="/labs/lab2/tailwind">
        Tailwind CSS Examples
      </Link>
    </div>
  );
}
