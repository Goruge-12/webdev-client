
export default function ForegroundColors() {
  return (
    <div id="wd-css-colors">
      <h2>Colors</h2>

      <h3 className="wd-fg-color-blue">
        Foreground color
      </h3>

      <p className="wd-fg-color-red">
        The text in this paragraph is red but{" "}
        <span className="wd-fg-color-green">
          this text is green
        </span>
      </p>

      <h4>On my own</h4>
      <p className="wd-fg-color-blue">
        I am learning how to use CSS to change text colors, and{" "}
        <span className="wd-fg-color-green">
          this part of the sentence is green.
        </span>
      </p>

      <h4>With AI</h4>
      <p id="wd-ai-fg" className="wd-fg-color-blue">
        This paragraph has blue text, but{" "}
        <span className="wd-fg-color-black">
          this part is black.
        </span>
      </p>
    </div>
  );
}
