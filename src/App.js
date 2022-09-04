import "./styles.css";
import { useState } from "react";

export default function App() {
  // Varibales and UseStates

  const [meaning, setMeaning] = useState("");

  // Data structures for emoji
  let emojiDictionary = {
    "😀": "Happy",
    "🥰": "Loved",
    "🤨": "suspicious",
    "🤩": "amazed",
    "😎": "Cool",
    "😉": "wink"
  };

  // Algorithms

  function inputHandler(event) {
    var emoji = event.target.value;
    var emojiMeaning = emojiDictionary[emoji];

    if (emojiMeaning === undefined) {
      var output = "Emoji Not Identified";
    } else {
      var output = emojiMeaning;
    }

    setMeaning(output);
  }

  function emojiClickHandler(item) {
    var emojiMeaning = emojiDictionary[item];

    if (emojiMeaning === undefined) {
      var output = "Emoji not identified";
    } else {
      var output = emojiMeaning;
    }

    setMeaning(output);
  }

  // Playground
  var emojiList = Object.keys(emojiDictionary);
  // Final Display Elements

  return (
    <div className="App">
      <h1>Emoji Identifier</h1>
      <input placeholder="Search Emoji..." onChange={inputHandler} />
      <p> {meaning} </p>
      <small> Emoji's We know </small>
      <br />
      {emojiList.map((item) => (
        <button onClick={() => emojiClickHandler(item)}> {item} </button>
      ))}
    </div>
  );
}
