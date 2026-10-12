export default function Float() {
  return (
    <div id="wd-css-float">
      <h2>Float</h2>
      <div className="wd-float-demo">
        <div className="wd-float-left wd-bg-color-yellow">Float left</div>
        <p>Text wraps around a floated element. This paragraph shows how float affects the content beside it.</p>
      </div>
      <div className="wd-float-demo">
        <div className="wd-float-right wd-bg-color-blue wd-fg-color-white">Float right</div>
        <p>This text wraps on the left side of the floated box.</p>
      </div>
      <h4>On my own</h4><div className="wd-float-demo"><div className="wd-float-left wd-bg-color-red">My float</div><p>I used a left float for this example.</p></div>
      <h4>With AI</h4><div id="wd-ai-float" className="wd-float-demo"><div className="wd-float-right wd-bg-color-yellow">AI float</div><p>This example floats to the right.</p></div>
    </div>
  );
}
