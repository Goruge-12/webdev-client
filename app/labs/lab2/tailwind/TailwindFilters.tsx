export default function TailwindFilters() {
  const src = "/images/reactjs.jpg";
  return (
    <div>
      <h2 className="text-2xl font-bold">Blurs</h2>
      <div className="flex">
        {/* eslint-disable @next/next/no-img-element */}
        <img className="blur-none w-1/4" src={src} alt="blur none" />
        <img className="blur-sm w-1/4" src={src} alt="blur sm" />
        <img className="blur-lg w-1/4" src={src} alt="blur lg" />
        <img className="blur-2xl w-1/4" src={src} alt="blur 2xl" />
      </div>
      <h3 className="text-xl font-semibold mt-6">On my own</h3>
      <div className="flex">
        <img className="grayscale w-1/4" src={src} alt="grayscale" />
        <img className="contrast-150 w-1/4" src={src} alt="high contrast" />
        <img className="brightness-75 w-1/4" src={src} alt="brightness" />
      </div>
      <h3 className="text-lg font-bold mt-6">With AI</h3>
      <div id="wd-ai-filters" className="flex">
        <img className="grayscale w-1/4" src={src} alt="grayscale" />
        <img className="grayscale-0 w-1/4" src={src} alt="full color" />
        <img className="brightness-50 w-1/4" src={src} alt="dark" />
        <img className="brightness-150 w-1/4" src={src} alt="bright" />
      </div>
      {/* eslint-enable @next/next/no-img-element */}
    </div>
  );
}
