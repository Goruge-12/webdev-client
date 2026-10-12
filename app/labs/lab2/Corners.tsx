
export default function Corners() {
  return (
    <div id="wd-css-corners">
      <h2>Rounded corners</h2>

      <p className="wd-rounded-corners-top wd-border-thin wd-border-blue wd-border-solid wd-padding-fat">
        Rounded corners on the top
      </p>

      <p className="wd-rounded-corners-bottom wd-border-thin wd-border-blue wd-border-solid wd-padding-fat">
        Rounded corners at the bottom
      </p>

      <p className="wd-rounded-corners-all-around wd-border-thin wd-border-blue wd-border-solid wd-padding-fat">
        Rounded corners all around
      </p>

      <p className="wd-rounded-corners-inline wd-border-thin wd-border-blue wd-border-solid wd-padding-fat">
        Different rounded corners
      </p>

      <h4>On my own</h4>
      <p className="wd-your-rounded-right wd-border-thin wd-border-blue wd-border-solid wd-padding-fat">
        This paragraph has rounded corners on the right side.
      </p>

      <h4>With AI</h4>
      <p
        id="wd-ai-corners"
        className="wd-ai-rounded-left wd-border-thin wd-border-blue wd-border-solid wd-padding-fat"
      >
        This paragraph has rounded corners on the left side.
      </p>
    </div>
  );
}
