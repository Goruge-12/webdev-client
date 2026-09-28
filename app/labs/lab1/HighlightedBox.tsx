import type { ReactNode } from "react";

function HighlightedBox({
  backgroundColor = "lightyellow",
  borderColor = "orange",
  borderWidth = 2,
  borderRadius = 8,
  children,
}: {
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: string | number;
  borderRadius?: string | number;
  children?: ReactNode;
}) {
  return (
    <div
      style={{
        backgroundColor,
        borderColor,
        borderWidth,
        borderStyle: "solid",
        borderRadius,
        padding: "0.75rem 1rem",
        marginBottom: "0.75rem",
      }}
    >
      {children}
    </div>
  );
}

export default function HighlightedBoxLab() {
  return (
    <div id="wd-highlighted-box">
      <h3>Highlighted Box</h3>

      {/* Book */}
      <HighlightedBox
        backgroundColor="lavender"
        borderColor="purple"
        borderWidth={3}
        borderRadius={12}
      >
        <h4>Callout</h4>
        <p>
          This box wraps <strong>any</strong>{" "}
          children — headings, paragraphs, lists, and more.
        </p>
        <ul>
          <li>backgroundColor</li>
          <li>borderColor</li>
          <li>borderWidth</li>
          <li>borderRadius</li>
        </ul>
      </HighlightedBox>

      <HighlightedBox
        backgroundColor="#e8f5e9"
        borderColor="green"
        borderWidth={2}
        borderRadius={20}
      >
        <p>
          A second box with different style props wrapping different content.
        </p>
      </HighlightedBox>

      {/* On my own */}
      <HighlightedBox
        backgroundColor="lightblue"
        borderColor="darkblue"
        borderWidth={3}
        borderRadius={10}
      >
        <h4>My Goals</h4>
        <ul>
          <li>Finish my MS in Computer Science.</li>
          <li>Improve my full-stack development skills.</li>
          <li>
            Continue growing my career in aerospace and technology.
          </li>
        </ul>
      </HighlightedBox>

      {/* With AI */}
      <HighlightedBox
        backgroundColor="lightyellow"
        borderColor="goldenrod"
        borderWidth={3}
        borderRadius={12}
      >
        <h4>Web Development</h4>
        <p>
          Web applications use different technologies working together.
        </p>
        <ul>
          <li>
            <strong>HTML</strong> provides structure.
          </li>
          <li>
            <strong>CSS</strong> controls presentation.
          </li>
          <li>
            <strong>JavaScript</strong> adds interactivity.
          </li>
        </ul>
      </HighlightedBox>
    </div>
  );
}