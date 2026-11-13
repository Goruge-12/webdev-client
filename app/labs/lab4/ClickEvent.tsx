
"use client";

const hello = () => {
  alert("Hello World!");
};

export default function ClickEvent() {
  return (
    <div id="wd-click-event">
      <h2>Click Event</h2>

      <button
        type="button"
        onClick={hello}
        id="wd-onclick-hello"
        className="btn btn-primary"
      >
        Click Hello
      </button>

      <hr />
    </div>
  );
}
