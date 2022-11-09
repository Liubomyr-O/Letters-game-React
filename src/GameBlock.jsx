import React from "react";
import { useState, useEffect } from "react";
import { RandomABC } from "./components/RandomABC";

export function GameBlock({ gameOn }) {
  const [character, setCharacter] = useState("A");

  useEffect(() => {
    setCharacter("*");
  }, []);

  useEffect(() => {
    if (gameOn === true) {
      let blockNumber = RandomABC();
      setCharacter(blockNumber);
    } else {
      console.log("gameOff");
    }
  }, [gameOn]);

  const check = () => {
    console.log("чек кнопки");
  };

  return <button onClick={check}>{character}</button>;
}
