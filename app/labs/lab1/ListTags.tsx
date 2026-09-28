export default function ListTags() {
  return (
    <div id="wd-lists">
      <h4>List Tags</h4>

      {/* Book */}
      <h5>Ordered List Tag</h5>
      How to make pancakes:
      <ol id="wd-pancakes">
        <li>Mix dry ingredients.</li>
        <li>Add wet ingredients.</li>
        <li>Stir to combine.</li>
        <li>Heat a skillet or griddle.</li>
        <li>Pour batter onto the skillet.</li>
        <li>Cook until bubbly on top.</li>
        <li>Flip and cook the other side.</li>
        <li>Serve and enjoy!</li>
      </ol>

      <h5>Unordered List Tag</h5>
      My favorite books (in no particular order)
      <ul id="wd-my-books">
        <li>Dune</li>
        <li>Lord of the Rings</li>
        <li>Ender&apos;s Game</li>
        <li>Red Mars</li>
        <li>The Forever War</li>
      </ul>

      {/* On my own */}
      <h5>My favorite recipe: Steak Tacos</h5>
      <ol id="wd-your-favorite-recipe">
        <li>Season the steak with garlic and adobo.</li>
        <li>Cook the steak and cut it into pieces.</li>
        <li>Warm the tortillas.</li>
        <li>Add the steak and cheese to the tortillas.</li>
        <li>Top the tacos with cilantro.</li>
        <li>Serve and enjoy!</li>
      </ol>

      <h5>My favorite books (in no particular order)</h5>
      <ul id="wd-your-books">
        <li>The Great Gatsby</li>
        <li>The Hunger Games</li>
        <li>Diary of a Wimpy Kid</li>
      </ul>

      {/* With AI */}
      <h5>HTML Tags</h5>
      <ul id="wd-ai-html-tags">
        <li>h1 - Creates a top-level heading.</li>
        <li>p - Creates a paragraph.</li>
        <li>ol - Creates an ordered list.</li>
        <li>ul - Creates an unordered list.</li>
        <li>table - Organizes data into rows and columns.</li>
      </ul>
    </div>
  );
}