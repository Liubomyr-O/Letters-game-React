import React from "react";
import { useState, useEffect } from "react";

let clickQttSum = 0;

export function GameBlock({ gameOn, youLose, youWin, keysArray, id }) {
  const [character, setCharacter] = useState("");

  useEffect(() => {
    setCharacter("*");
  }, []);

  useEffect(() => {
    if (gameOn === true) {
      for (let i = 1; i <= 9; i++) {
        document.getElementById(`button${i}`).classList.remove("hide-text");
      }
      setCharacter(keysArray[id]);
    } else {
      console.log("gameOff");
    }
  }, [gameOn]);

  const check = () => {
    document.getElementById(`button${id}`).innerHTML = `${character}`;
    if (character == keysArray[0]) {
      document.getElementById(`button${id}`).classList.add("win-green");
      clickQttCheck();
    } else {
      if (gameOn) {
        for (let i = 1; i <= 9; i++) {
          let correctCharacter = keysArray[i];
          document.getElementById(`button${i}`).classList.add("loss-team");
          document.getElementById(
            `button${i}`
          ).innerHTML = `${correctCharacter}`;
        }
        document.getElementById(`button${id}`).classList.add("loss-red");
        youLose();
        clickQttSum = 0;
      } else return;
    }
  };

  const clickQttCheck = () => {
    clickQttSum += 1;
    if (clickQttSum == keysArray[10]) {
      youWin();
      clickQttSum = 0;
    }
  };

  return (
    <button name="button" id={`button${id}`} onClick={check}>
      {character}
    </button>
  );
}
