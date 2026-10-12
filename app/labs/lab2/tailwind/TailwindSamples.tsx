
export default function TailwindSamples() {
  return (
    <div id="wd-tailwind-samples" className="space-y-6 p-4">
      <h2 className="text-2xl font-bold">Tailwind CSS</h2>

      <section>
        <h3 className="text-xl font-semibold">Margins and Padding</h3>

        <h4>Margins</h4>
        <div className="bg-gray-200 p-2 text-black">
          <div className="m-5 bg-yellow-200 p-2">
            Margin on all sides
          </div>
          <div className="mt-5 bg-blue-200 p-2">
            Margin on top
          </div>
          <div className="mb-5 bg-green-200 p-2">
            Margin on bottom
          </div>
          <div className="ml-5 bg-red-200 p-2">
            Margin on the left
          </div>
          <div className="mr-5 bg-purple-200 p-2">
            Margin on the right
          </div>
          <div className="mx-5 bg-orange-200 p-2">
            Margin on the left and right
          </div>
          <div className="my-5 bg-pink-200 p-2">
            Margin on the top and bottom
          </div>
        </div>

        <h4>Padding</h4>
        <div className="space-y-3">
          <div className="bg-yellow-200 p-5 text-black">
            Padding on all sides
          </div>
          <div className="bg-blue-200 pt-5 text-black">
            Padding on top
          </div>
          <div className="bg-green-200 pb-5 text-black">
            Padding on bottom
          </div>
          <div className="bg-red-200 pl-5 text-black">
            Padding on the left
          </div>
          <div className="bg-purple-200 pr-5 text-black">
            Padding on the right
          </div>
          <div className="bg-orange-200 px-5 text-black">
            Padding on the left and right
          </div>
          <div className="bg-pink-200 py-5 text-black">
            Padding on the top and bottom
          </div>
        </div>

        <h4>On my own</h4>
        <div className="m-6 bg-blue-200 p-8 text-black">
          My margin and padding example
        </div>

        <h4>With AI</h4>
        <div
          id="wd-ai-tw-spacing"
          className="m-2 bg-red-200 p-4 text-black"
        >
          AI spacing example
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold">
          Font Size and Weight
        </h3>

        <p className="text-xs">Extra small text</p>
        <p className="text-sm">Small text</p>
        <p className="text-base">Normal text</p>
        <p className="text-lg">Large text</p>
        <p className="text-xl">Extra large text</p>
        <p className="text-2xl">2XL text</p>

        <p className="font-light">Light font</p>
        <p className="font-normal">Normal font</p>
        <p className="font-semibold">Semibold font</p>
        <p className="font-bold">Bold font</p>

        <h4>On my own</h4>
        <p className="text-sm italic">My italic text</p>

        <h4>With AI</h4>
        <p id="wd-ai-tw-type" className="text-xl underline">
          AI underlined text
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold">Background Colors</h3>

        <div className="bg-red-200 p-4 text-black">
          Red background
        </div>
        <div className="bg-yellow-200 p-4 text-black">
          Yellow background
        </div>
        <div className="bg-green-200 p-4 text-black">
          Green background
        </div>
        <div className="bg-blue-200 p-4 text-black">
          Blue background
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
        <h3 className="text-xl font-semibold">
          Responsive Design
        </h3>

        <h4>Responsive Background Colors</h4>
        <div className="bg-yellow-200 p-3 text-black md:bg-blue-200 lg:bg-green-200">
          Background changes depending on screen size
        </div>

        <h4>Responsive Show and Hide</h4>
        <div className="block bg-red-200 p-3 text-black md:hidden">
          Visible on smaller screens
        </div>
        <div className="hidden bg-green-200 p-3 text-black md:block">
          Visible on larger screens
        </div>

        <h4>Responsive Flex Row</h4>
        <div className="mt-2 flex flex-col gap-2 md:flex-row">
          <div className="bg-red-200 p-3 text-black">
            First
          </div>
          <div className="bg-blue-200 p-3 text-black">
            Second
          </div>
          <div className="bg-green-200 p-3 text-black">
            Third
          </div>
        </div>

        <h4>Responsive Grid Columns</h4>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-red-200 p-4 text-black">
            Column 1
          </div>
          <div className="bg-yellow-200 p-4 text-black">
            Column 2
          </div>
          <div className="bg-blue-200 p-4 text-black">
            Column 3
          </div>
        </div>

        <h4>Responsive Spacing and Text Size</h4>
        <div className="bg-purple-200 p-2 text-sm text-black md:p-6 md:text-lg lg:p-10 lg:text-2xl">
          Padding and text size change with the screen width.
        </div>

        <h4>Responsive Card</h4>
        <div className="max-w-sm rounded-lg border bg-white p-4 text-black shadow-md md:max-w-lg md:p-6">
          <h5 className="text-xl font-bold">
            Course Card
          </h5>
          <p className="mt-2">
            This card changes its size and padding depending on
            the screen width.
          </p>
        </div>

        <h4>On my own</h4>
        <p className="text-sm md:text-lg">
          My responsive text
        </p>

        <h4>With AI</h4>
        <div
          id="wd-ai-tw-responsive"
          className="bg-yellow-200 p-2 text-black md:p-6"
        >
          Responsive padding
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold">Blurs and Filters</h3>

        <div className="flex flex-wrap gap-4">
          <div className="bg-blue-300 p-4 text-black blur-sm">
            Small blur
          </div>
          <div className="bg-green-300 p-4 text-black blur-md">
            Medium blur
          </div>
          <div className="bg-purple-300 p-4 text-black blur-lg">
            Large blur
          </div>
          <div className="bg-yellow-300 p-4 text-black brightness-75">
            Brightness
          </div>
        </div>

        <h4>On my own</h4>
        <div className="bg-green-300 p-4 text-black contrast-150">
          My filter
        </div>

        <h4>With AI</h4>
        <div
          id="wd-ai-tw-filter"
          className="bg-red-300 p-4 text-black grayscale"
        >
          AI filter
        </div>
      </section>

      <section>
        <h3
          id="wd-tailwind-grid-system"
          className="text-xl font-semibold"
        >
          CSS Grid
        </h3>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          <div className="bg-red-200 p-4 text-black">1</div>
          <div className="bg-yellow-200 p-4 text-black">2</div>
          <div className="bg-blue-200 p-4 text-black">3</div>
        </div>

        <h4>Grid Column Spans</h4>
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
          <div className="col-span-1 bg-red-200 p-4 text-black">
            One column
          </div>
          <div className="col-span-3 bg-purple-200 p-4 text-black">
            Three columns
          </div>
        </div>

        <h4>On my own</h4>
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-green-200 p-3 text-black">
            My 1
          </div>
          <div className="bg-green-200 p-3 text-black">
            My 2
          </div>
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
