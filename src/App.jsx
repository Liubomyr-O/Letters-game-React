import { useState, useEffect } from "react";
import "./App.css";
import { GameBlock } from "./GameBlock";
import { RandomABC } from "./assets/components/RandomABC";
import { Counter } from "./assets/components/Counter";
import { GetGift } from "./assets/components/Gift";

function GameArea() {
  const [gameOn, setGameOn] = useState(false);
  const [mainLetter, setMainLetter] = useState("");
  const [keysArray, setArray] = useState([]);
  const [losingScenario, setLosingScenario] = useState(false);
  const [winningScenario, setWinningScenario] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [winningAttempts, setWinningAttempts] = useState(0);
  const [giftPresented, setGiftPresented] = useState(false);

  const timeEnds = () => {
    for (let i = 1; i <= 9; i++) {
      document.getElementById(`button${i}`).innerHTML = "?";
    }
  };

  const youWin = () => {
    setWinningScenario(true);
    setGameOn(false);
    let winAttemsQtt = attempts + 1;
    setAttempts(0);
    setWinningAttempts(winAttemsQtt);
  };

  const youLose = () => {
    setLosingScenario(true);
    setGameOn(false);
    setAttempts(attempts + 1);
  };

  const startGame = (e) => {
    setGameOn(true);
    let letter = RandomABC();
    setMainLetter(letter);
    let pushedArray = [letter];

    let goalsSum = 0;

    for (let j = 1; j <= 9; j++) {
      let key = RandomABC();
      if (key == letter) {
        goalsSum += 1;
      }
      pushedArray.push(key);
    }
    pushedArray.push(goalsSum);
    setArray(pushedArray);

    console.log(goalsSum, pushedArray);

    document.getElementById("start-button").classList.toggle("hidden");
    document.getElementById("description").classList.toggle("hidden");
    document.getElementById("start-text").classList.toggle("hidden");
  };

  const restartGame = () => {
    setGameOn(false);
    setMainLetter("");
    setArray([]);
    setLosingScenario(false);
    setWinningScenario(false);
    setGiftPresented(false);
    document.getElementById("start-button").classList.toggle("hidden");
    document.getElementById("description").classList.toggle("hidden");
    document.getElementById("start-text").classList.toggle("hidden");

    for (let i = 1; i <= 9; i++) {
      if (
        document.getElementById(`button${i}`).classList.contains("loss-team")
      ) {
        document.getElementById(`button${i}`).classList.remove("loss-team");
      }
      if (
        document.getElementById(`button${i}`).classList.contains("loss-red")
      ) {
        document.getElementById(`button${i}`).classList.remove("loss-red");
      }
      if (
        document.getElementById(`button${i}`).classList.contains("win-green")
      ) {
        document.getElementById(`button${i}`).classList.remove("win-green");
      }
      document.getElementById(`button${i}`).classList.add("hide-text");
    }
  };

  function getGift() {
    setGiftPresented(true);
    setWinningScenario(false);
  }

  return (
    <>
      {gameOn && (
        <div className="count">
          <Counter
            gameOn={gameOn}
            time={5}
            timeID={Date.now()}
            mainLetter={mainLetter}
            timeEnds={timeEnds}
          />
        </div>
      )}
      <h3 id="start-text">
        Click the "Start game" button if you are ready to start
      </h3>
      <h4 id="description">
        You will have only 5 seconds to remember the placement of the A, B, C
        letters.
      </h4>
      {losingScenario && (
        <>
          <h3 className="losing-scenario">
            Sorry! you just lost the game. Try again!
          </h3>
          <h4>Total attempts - {attempts}</h4>
        </>
      )}
      {winningScenario && (
        <>
          <h3 className="winning-scenario">Congratulations! You won!</h3>
          <h4>Total attempts - {winningAttempts}</h4>
        </>
      )}
      {giftPresented && (
        <>
          <GetGift />
          <button
            id="start-button"
            className="restarGame"
            onClick={restartGame}
          >
            Restart Game
          </button>
        </>
      )}
      {!giftPresented && (
        <>
          <div className="block-zone">
            <GameBlock
              gameOn={gameOn}
              youLose={youLose}
              youWin={youWin}
              keysArray={keysArray}
              id={1}
            />
            <GameBlock
              gameOn={gameOn}
              youLose={youLose}
              youWin={youWin}
              keysArray={keysArray}
              id={2}
            />
            <GameBlock
              gameOn={gameOn}
              youLose={youLose}
              youWin={youWin}
              keysArray={keysArray}
              id={3}
            />
            <GameBlock
              gameOn={gameOn}
              youLose={youLose}
              youWin={youWin}
              keysArray={keysArray}
              id={4}
            />
            <GameBlock
              gameOn={gameOn}
              youLose={youLose}
              youWin={youWin}
              keysArray={keysArray}
              id={5}
            />
            <GameBlock
              gameOn={gameOn}
              youLose={youLose}
              youWin={youWin}
              keysArray={keysArray}
              id={6}
            />
            <GameBlock
              gameOn={gameOn}
              youLose={youLose}
              youWin={youWin}
              keysArray={keysArray}
              id={7}
            />
            <GameBlock
              gameOn={gameOn}
              youLose={youLose}
              youWin={youWin}
              keysArray={keysArray}
              id={8}
            />
            <GameBlock
              gameOn={gameOn}
              youLose={youLose}
              youWin={youWin}
              keysArray={keysArray}
              id={9}
            />
          </div>
          <button id="start-button" className="starGame" onClick={startGame}>
            Start game
          </button>
        </>
      )}
      {losingScenario && (
        <button
          id="restart-button"
          className="restarGame"
          onClick={restartGame}
        >
          Start again
        </button>
      )}
      {winningScenario && (
        <button id="gift" className="gift" onClick={getGift}>
          Get your gift!
        </button>
      )}
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
