import React, { useState } from "react";

export default function Player(props) {
  const [score, setScore] = useState(0);

  const handleMinus=()=>{
      setScore(prev=>prev-1)
  }

  const handlePlus=()=>{
    setScore(prev=>prev+1)
}

const handleresetScore = () => {
    setScore(0)
}

  return (
    <div style={{display:"flex", alignItems:'center'}}>
      <p>{props.player}</p>
      <div onClick={handlePlus}>+</div>
      <div onClick={handleMinus}>-</div>
      <div>{score}</div>
      <div onClick={handleresetScore}>Reset score</div>
    </div>
  );
}