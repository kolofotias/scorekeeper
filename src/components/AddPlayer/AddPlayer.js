import React, { useState } from "react";
import './AddPlayer.css';


export default function AddPlayer(props) {
  const { setGame } = props;

  const [newPlayerName, setNewPlayerName] = useState("");

  const handleNewPlayer = (e) => {
    setNewPlayerName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setGame((cur) => [
      ...cur,
      {
        name: newPlayerName,
        score: 0,
      },
    ]);
    setNewPlayerName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Add Player:
        <br/>
        <input
          type="text"
          name="name"
          placeholder="Player name"
          value={newPlayerName}
          onChange={handleNewPlayer}
        />
      </label>
      <input type="submit" id="submit" />
    </form>
  );
}