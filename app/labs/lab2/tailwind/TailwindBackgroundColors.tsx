export default function TailwindBackgroundColors() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Background Colors</h2>
      <div className="bg-red-500 text-white p-4 mb-4">This div has a red background.</div>
      <div className="bg-green-500 text-white p-4 mb-4">This div has a green background.</div>
      <div className="bg-blue-500 text-white p-4 mb-4">This div has a blue background.</div>
      <div className="bg-yellow-500 text-black p-4 mb-4">This div has a yellow background.</div>
      <h3 className="text-xl font-semibold">On my own</h3>
      <div className="bg-purple-200 text-black p-4 mb-4">My background color.</div>
      <h3 className="text-xl font-semibold">With AI</h3>
      <div id="wd-ai-bg" className="bg-indigo-700 text-white p-4 mb-4">Another background shade.</div>
    </div>
  );
}
