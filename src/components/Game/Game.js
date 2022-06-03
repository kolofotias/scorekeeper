import React, { useEffect, useState } from "react";
import AddPlayer from "../AddPlayer/AddPlayer";
import Players from "../Players/Players";

export default function Game() {


  const [game, setGame] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("game");
    if(saved){
      const initialValue = JSON.parse(saved);
      return initialValue
        }
        return []
     });

  useEffect(() => {
    //refresh local storage
    localStorage.setItem("game", JSON.stringify(game));
  }, [game]);


  const handleResetGame = () => {
    setGame([]);
  };

  const handleResetAllScore = () => {
    setGame((cur) =>
      cur.map((item) => {
        return { name: item.name, score: 0 };
      })
    );
  };


  return (
    <>
       <h1>Scorekeeper</h1>

      {game && game.length > 0 && <><Players setGame={setGame} game={game} /><br /></>}     
      {game && game.length > 0 && <><button style={{ width: "100px" }} onClick={handleResetAllScore}>Reset scores</button><br /><br /></>}
      {game.length > 0 &&  <><button style={{ width: "100px" }} onClick={handleResetGame}>Reset all</button><br /><br /></>}
      <hr/>
      <AddPlayer setGame={setGame} /><br/>
    </>
  );
}
