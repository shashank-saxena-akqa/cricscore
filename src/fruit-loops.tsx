import * as React from 'react';
import { render } from 'react-dom'

function FruitLoops() {
  let fruit: Array<string> = [
    "red",
    "green",
    "yellow",
    "blue",
    "purple",
    "brown",
    "orange",
    "pink",
    "aqua",
    "lime"
  ]

  return (
    <ul>
      {fruit.map((value) => {
        return <li key={value}> {value} </li>
      })}
    </ul>
  )
}

FruitLoops.displayName = "FruitLoops";

export default FruitLoops;