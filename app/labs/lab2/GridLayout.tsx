export default function GridLayout() {
  return (
    <div id="wd-css-grid-layout">
      <h2>Grid layout with float</h2>
      <div className="wd-float-grid">
        <div className="wd-float-col wd-bg-color-red">Column 1</div>
        <div className="wd-float-col wd-bg-color-yellow">Column 2</div>
        <div className="wd-float-col wd-bg-color-blue wd-fg-color-white">Column 3</div>
      </div>
      <h4>On my own</h4>
      <div className="wd-float-grid"><div className="wd-float-half wd-bg-color-yellow">Left half</div><div className="wd-float-half wd-bg-color-red">Right half</div></div>
      <h4>With AI</h4>
      <div id="wd-ai-grid" className="wd-float-grid"><div className="wd-float-half wd-bg-color-blue wd-fg-color-white">AI left</div><div className="wd-float-half wd-bg-color-yellow">AI right</div></div>
    </div>
  );
}
