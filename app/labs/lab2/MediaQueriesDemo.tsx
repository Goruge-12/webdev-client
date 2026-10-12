export default function MediaQueriesDemo() {
  return (
    <div id="wd-css-media-queries">
      <h2>Media queries</h2>
      <div className="wd-media-demo">Resize the browser to change this box's color.</div>
      <h4>On my own</h4><div className="wd-your-media">This box stacks on narrow screens.</div>
      <h4>With AI</h4><div id="wd-ai-media" className="wd-ai-media">This box changes its padding at smaller widths.</div>
    </div>
  );
}
