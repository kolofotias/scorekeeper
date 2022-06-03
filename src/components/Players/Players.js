import React from "react";
import Player from "../Player/Player";

export default function Players(props) {
  const { game, setGame } = props;

  const players = game.map((player,index) => {
    return (
      <React.Fragment key={index}>
        <Player setGame={setGame} player={player} />
      </React.Fragment>
    );
  });
  return <>{players}</>;
}