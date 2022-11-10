import React from "react";

export function RandomABC(min = 1, max = 3) {
  min = Math.ceil(min);
  max = Math.floor(max);
  let number = Math.floor(Math.random() * (max - min + 1) + min);
  switch (number) {
    case 1:
      return "A";
    case 2:
      return "B";
    case 3:
      return "C";
    default:
      alert("Sorry, randomizer do not work");
  }
}
