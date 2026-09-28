export default function AnchorTag() {
  return (
    <>
      <h4>Anchor tag</h4>

      {/* Book */}
      Please{" "}
      <a href="https://www.lipsum.com" id="wd-lipsum">
        click here
      </a>{" "}
      to get dummy text
      <br />

      <a href="https://github.com/jannunzi" id="wd-github">
        GitHub
      </a>

      <br />

      {/* On my own */}
      <a
        href="https://www.wwe.com"
        id="wd-your-link"
        target="_blank"
        rel="noreferrer"
      >
        WWE
      </a>

      <br />

      <a
        href="https://github.com/Goruge-12"
        id="wd-your-github"
        target="_blank"
        rel="noreferrer"
      >
        My GitHub
      </a>

      <br />

      {/* With AI */}
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table"
        id="wd-ai-link"
        target="_blank"
        rel="noreferrer"
      >
        MDN: table element
      </a>
    </>
  );
}