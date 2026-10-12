
export default function Dimensions() {
  return (
    <div id="wd-css-dimensions">
      <h2>Dimension</h2>

      <div>
        <div className="wd-dimension-portrait wd-bg-color-yellow">
          Portrait
        </div>

        <div className="wd-dimension-landscape wd-bg-color-blue wd-fg-color-white">
          Landscape
        </div>

        <div className="wd-dimension-square wd-bg-color-red">
          Square
        </div>
      </div>

      <h4>On my own</h4>
      <div className="wd-your-dimension wd-bg-color-green wd-fg-color-white">
        My own sized box with some extra text.
      </div>

      <h4>With AI</h4>
      <div
        id="wd-ai-dimension"
        className="wd-ai-dimension wd-bg-color-yellow"
      >
        This is a longer sentence inside a box with a set width and height.
      </div>
    </div>
  );
}
