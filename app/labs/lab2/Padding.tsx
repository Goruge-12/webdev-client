
export default function Padding() {
  return (
    <div id="wd-css-paddings">
      <h2>Padding</h2>

      <div className="wd-padded-top-left wd-border-fat wd-border-red wd-border-solid wd-bg-color-yellow">
        Padded top left
      </div>

      <div className="wd-padded-bottom-right wd-border-fat wd-border-blue wd-border-solid wd-bg-color-yellow">
        Padded bottom right
      </div>

      <div className="wd-padding-fat wd-border-fat wd-border-yellow wd-border-solid wd-bg-color-blue wd-fg-color-white">
        Padded all around
      </div>

      <h4>On my own</h4>
      <div className="wd-your-padding wd-border-fat wd-border-red wd-border-solid wd-bg-color-yellow">
        This box has extra padding on the right.
      </div>

      <h4>With AI</h4>
      <div
        id="wd-ai-padded"
        className="wd-ai-padding wd-border-fat wd-border-red wd-border-solid wd-bg-color-yellow"
      >
        This box has extra padding on top.
      </div>
    </div>
  );
}
