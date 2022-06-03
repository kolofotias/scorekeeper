import React, { useState } from "react";
import Players from "../Players/Players";
import AddPlayer from "../AddPlayer/AddPlayer"

export default function Game() {
  const [playerList, setPlayerList] = useState([]);

  console.log(playerList);

  const handleResetGame = () =>{
      setPlayerList([])
  }

  return (
    <>
      {playerList.length > 0 && <Players playerList={playerList} />}
      <AddPlayer setPlayerList={setPlayerList} />
      {playerList.length > 0 && <div onClick={handleResetGame}>Reset All</div>}

    </>
  );
}