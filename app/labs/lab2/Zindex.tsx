export default function Zindex() {
  return (
    <div id="wd-css-zindex">
      <h2>Z-index</h2>
      <div className="wd-zindex-demo">
        <div className="wd-zindex-red">Red box (z-index: 1)</div>
        <div className="wd-zindex-blue">Blue box (z-index: 2)</div>
        <div className="wd-zindex-yellow">Yellow box (z-index: 3)</div>
      </div>
      <h4>On my own</h4><p>Yellow appears on top because it has the highest z-index.</p>
      <h4>With AI</h4><p id="wd-ai-zindex">Changing the z-index changes which overlapping box is in front.</p>
    </div>
  );
}
