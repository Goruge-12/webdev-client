export default function Positions() {
  return (
    <div id="wd-css-positions">
      <h2>Positions</h2>
      <h3>Relative</h3>
      <div className="wd-bg-color-gray wd-position-demo">
        <div className="wd-bg-color-yellow wd-dimension-portrait">
          <div className="wd-pos-relative-nudge-down-right">Portrait</div>
        </div>
        <div className="wd-pos-relative-nudge-up-right wd-bg-color-blue wd-fg-color-white wd-dimension-landscape">Landscape</div>
        <div className="wd-bg-color-red wd-dimension-square">Square</div>
        <h4>On my own</h4>
        <div className="wd-your-relative wd-bg-color-yellow">My relative box</div>
        <h4>With AI</h4>
        <div id="wd-ai-relative" className="wd-ai-pos-relative-nudge wd-bg-color-blue wd-fg-color-white">AI relative box</div>
      </div>
      <h3>Absolute</h3>
      <div className="wd-pos-relative wd-absolute-demo">
        <div className="wd-pos-absolute-10-10 wd-bg-color-yellow wd-dimension-portrait">Portrait</div>
        <div className="wd-pos-absolute-50-50 wd-bg-color-blue wd-fg-color-white wd-dimension-landscape">Landscape</div>
        <div className="wd-pos-absolute-120-20 wd-bg-color-red wd-dimension-square">Square</div>
        <div className="wd-your-absolute wd-bg-color-green wd-fg-color-white">On my own</div>
        <div id="wd-ai-absolute" className="wd-ai-pos-absolute-br wd-bg-color-yellow">With AI</div>
      </div>
      <h3>Fixed</h3>
      <p>A fixed element stays in the same viewport position while scrolling.</p>
      <div className="wd-fixed-demo">Fixed position sample (contained here for easier testing)</div>
      <h4>On my own</h4><p>Fixed positioning uses the viewport instead of normal document flow.</p>
      <h4>With AI</h4><p id="wd-ai-fixed">A fixed element can be used for a floating help button.</p>
    </div>
  );
}
