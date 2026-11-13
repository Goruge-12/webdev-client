
export default function PassingFunctions({
  message,
  theFunction,
  theOtherFunction,
}: {
  message: string;
  theFunction: (message: string) => void;
  theOtherFunction: () => void;
}) {
  return (
    <div id="wd-passing-functions">
      <h2>Passing Functions</h2>

      <button
        type="button"
        onClick={() => theFunction(`From parent: ${message}`)}
        className="btn btn-success me-2"
      >
        Invoke the Function
      </button>

      <button
        type="button"
        onClick={theOtherFunction}
        className="btn btn-primary"
      >
        Invoke Other Function
      </button>

      <hr />
    </div>
  );
}
