
export default function TailwindSamples() {
  return (
    <div id="wd-tailwind-samples" className="space-y-6 p-4">
      <h2 className="text-2xl font-bold">Tailwind CSS</h2>

      <section>
        <h3 className="text-xl font-semibold">Spacing</h3>
        <div className="m-4 bg-yellow-200 p-6 text-black">
          Margin and padding
        </div>

        <h4>On my own</h4>
        <div className="bg-blue-200 p-8 text-black">
          My spacing example
        </div>

        <h4>With AI</h4>
        <div id="wd-ai-tw-spacing" className="m-2 bg-red-200 p-4 text-black">
          AI spacing example
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold">Typography</h3>
        <p className="text-lg font-bold">Bold text</p>

        <h4>On my own</h4>
        <p className="text-sm italic">My italic text</p>

        <h4>With AI</h4>
        <p id="wd-ai-tw-type" className="text-xl underline">
          AI underlined text
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold">Background colors</h3>
        <div className="bg-green-200 p-4 text-black">
          Green background
        </div>

        <h4>On my own</h4>
        <div className="bg-purple-200 p-4 text-black">
          My background
        </div>

        <h4>With AI</h4>
        <div id="wd-ai-tw-bg" className="bg-orange-200 p-4 text-black">
          AI background
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold">Responsive design</h3>

        <h4>Responsive background colors</h4>
        <div className="bg-yellow-200 p-3 text-black md:bg-blue-200 lg:bg-green-200">
          Color changes at breakpoints
        </div>

        <h4>Responsive show and hide</h4>
        <div className="block bg-red-200 p-3 text-black md:hidden">
          Visible on smaller screens
        </div>
        <div className="hidden bg-green-200 p-3 text-black md:block">
          Visible on larger screens
        </div>

        <h4>Responsive flex row</h4>
        <div className="mt-2 flex flex-col gap-2 md:flex-row">
          <div className="bg-red-200 p-3 text-black">First</div>
          <div className="bg-blue-200 p-3 text-black">Second</div>
        </div>

        <h4>Responsive grid columns</h4>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-red-200 p-4 text-black">Column 1</div>
          <div className="bg-yellow-200 p-4 text-black">Column 2</div>
          <div className="bg-blue-200 p-4 text-black">Column 3</div>
        </div>

        <h4>Responsive spacing and text size</h4>
        <div className="bg-purple-200 p-2 text-sm text-black md:p-6 md:text-lg lg:p-10 lg:text-2xl">
          Padding and text size change with screen width.
        </div>

        <h4>Responsive card</h4>
        <div className="max-w-sm rounded-lg border bg-white p-4 text-black shadow-md md:max-w-lg md:p-6">
          <h5 className="text-xl font-bold">Course Card</h5>
          <p>This card changes size based on the screen.</p>
        </div>

        <h4>On my own</h4>
        <p className="text-sm md:text-lg">My responsive text</p>

        <h4>With AI</h4>
        <div
          id="wd-ai-tw-responsive"
          className="bg-yellow-200 p-2 text-black md:p-6"
        >
          Responsive padding
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold">Filters</h3>

        <div className="flex flex-wrap gap-4">
          <div className="blur-sm bg-blue-300 p-4 text-black">
            Blur
          </div>
          <div className="brightness-75 bg-yellow-300 p-4 text-black">
            Brightness
          </div>
        </div>

        <h4>On my own</h4>
        <div className="contrast-150 bg-green-300 p-4 text-black">
          My filter
        </div>

        <h4>With AI</h4>
        <div id="wd-ai-tw-filter" className="grayscale bg-red-300 p-4 text-black">
          AI filter
        </div>
      </section>

      <section>
        <h3 id="wd-tailwind-grid-system" className="text-xl font-semibold">
          CSS Grid
        </h3>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          <div className="bg-red-200 p-4 text-black">1</div>
          <div className="bg-yellow-200 p-4 text-black">2</div>
          <div className="bg-blue-200 p-4 text-black">3</div>
        </div>

        <h4>Grid column spans</h4>
        <div className="grid grid-cols-4 gap-2">
          <div className="col-span-2 bg-blue-200 p-4 text-black">
            Two columns
          </div>
          <div className="col-span-2 bg-green-200 p-4 text-black">
            Two columns
          </div>
          <div className="col-span-4 bg-yellow-200 p-4 text-black">
            Four columns
          </div>
        </div>

        <h4>On my own</h4>
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-green-200 p-3 text-black">My 1</div>
          <div className="bg-green-200 p-3 text-black">My 2</div>
        </div>

        <h4>With AI</h4>
        <div
          id="wd-ai-tw-grid"
          className="grid grid-cols-2 gap-2 md:grid-cols-4"
        >
          <div className="bg-purple-200 p-2 text-black">A</div>
          <div className="bg-purple-200 p-2 text-black">B</div>
          <div className="bg-purple-200 p-2 text-black">C</div>
          <div className="bg-purple-200 p-2 text-black">D</div>
        </div>
      </section>
    </div>
  );
}
