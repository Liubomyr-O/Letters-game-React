import { useState, useEffect } from "react";
import { useInterval } from "usehooks-ts";

export function Counter({ gameOn, time, timeID, mainLetter, timeEnds }) {
  const [count, setCount] = useState(time);
  const [isPlaying, setPlaying] = useState(false);

  useInterval(
    () => {
      setCount(count - 1);
    },
    isPlaying ? 1000 : null
  );

  useEffect(() => {
    if (gameOn === true) {
      setPlaying(true);
    } else {
      document.getElementById("counter").classList.toggle("hidden");
    }
  }, [gameOn]);

  useEffect(() => {
    if (gameOn === true) {
      setCount(5);
      setPlaying(true);
    }
  }, [timeID]);

  if (!count) {
    setCount(`Please click on all "${mainLetter}" letters `);
    setPlaying(false);
    timeEnds();
  }

  return (
    <div id="counter">
      {/* <h4>Your game goes on...</h4> */}
      <h3>{count}</h3>
    </div>
  );
}
