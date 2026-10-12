export default function Flex() {
  return (
    <div id="wd-css-flex">
      <h2>Flex</h2>
      <div className="wd-flex-row">
        <div className="wd-bg-color-red">First</div>
        <div className="wd-bg-color-yellow">Second</div>
        <div className="wd-bg-color-blue wd-fg-color-white">Third</div>
      </div>
      <h3>Justify content</h3>
      <div className="wd-flex-between"><span>Left</span><span>Middle</span><span>Right</span></div>
      <h4>On my own</h4><div className="wd-flex-center"><span>Centered with Flexbox</span></div>
      <h4>With AI</h4><div id="wd-ai-flex" className="wd-flex-wrap"><span>One</span><span>Two</span><span>Three</span><span>Four</span></div>
    </div>
  );
}
