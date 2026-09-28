export default function Images() {
  return (
    <div id="wd-images">
      <h4>Image tag</h4>

      {/* Book */}
      Loading an image from the internet:
      <br />
      <img
        id="wd-starship"
        width="400px"
        alt="Starship"
        src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
      />

      <br />

      Loading a local image:
      <br />
      <img
        id="wd-teslabot"
        src="/images/teslabot.jpg"
        height="200px"
        alt="Tesla Bot (Optimus) humanoid robot"
      />

      {/* On my own */}
      <br />

      Loading my personal image:
      <br />
      <img
        id="wd-your-image"
        src="/images/USMC.jpeg"
        width="300px"
        alt="United States Marine Corps"
      />

      {/* With AI */}
      <br />

      Loading an additional image from the internet:
      <br />
      <img
        id="wd-ai-image"
        src="https://www.nasa.gov/wp-content/uploads/2023/03/iss066e081311.jpg"
        width="200px"
        alt="NASA space image"
      />
    </div>
  );
}