import React from "react";
import Player from "../Player/Player";

export default function Players(props) {
  const { playerList } = props;

  const players = playerList.map(player=>{
      console.log(player)
      return (
        <Player player={player} />
      )
  })
  return <>
    {players}
  </>
}