import { useState, useEffect } from "react";
import "./App.css";
import { GameBlock } from "./GameBlock";
import { RandomABC } from "./components/RandomABC";
import { Counter } from "./components/Counter";

function GameArea() {
  const [gameOn, setGameOn] = useState(false);
  const [mainLetter, setMainLetter] = useState("");

  const timeEnds = () => {
    setGameOn(false);
  };

  const startGame = (e) => {
    setGameOn(true);
    let letter = RandomABC();
    setMainLetter(letter);
    document.getElementById("counter").classList.toggle("hidden");
    document.getElementById("start-button").classList.toggle("hidden");
    document.getElementById("description").classList.toggle("hidden");
    document.getElementById("start-text").classList.toggle("hidden");
  };

  return (
    <>
      <div className="count">
        <Counter
          gameOn={gameOn}
          time={5}
          timeID={Date.now()}
          mainLetter={mainLetter}
          timeEnds={timeEnds}
        />
      </div>
      <h3 id="start-text">
        Click the "Start game" button if you are ready to start
      </h3>
      <h4 id="description">
        You will have only 5 seconds to remember the placement of the A, B, C
        letters.
      </h4>
      <div className="block-zone">
        <GameBlock gameOn={gameOn} />
        <GameBlock gameOn={gameOn} />
        <GameBlock gameOn={gameOn} />
        <GameBlock gameOn={gameOn} />
        <GameBlock gameOn={gameOn} />
        <GameBlock gameOn={gameOn} />
        <GameBlock gameOn={gameOn} />
        <GameBlock gameOn={gameOn} />
        <GameBlock gameOn={gameOn} />
      </div>
      <button id="start-button" className="starGame" onClick={startGame}>
        Start game
      </button>
    </>
  );
}

function App() {
  return (
    <main className="main">
      <GameArea />
    </main>
  );
}

export default App;
