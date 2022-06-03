import React from "react";
import './Player.css';

const Player = props => {
  const { player, setGame } = props;

  const handleMinus = () => {
    setGame ((cur)=>
      cur.map((item) => {
          return item.name === player.name? {name:item.name, score: (item.score>0) ? item.score-1 : 0 }
          : item;
      })
  ); 
  };

  const handlePlus = () => {
    setGame ((cur)=>
    cur.map((item) => {
        return item.name === player.name? {name:item.name, score:item.score+1}: item;
    })
); 
  };

  return (
    <div className="player">
      <p>{player.name}</p>
        <button counter onClick={handleMinus}>
          -
        </button>

       {player.score}

        <button counter onClick={handlePlus}>
          +
        </button>
      
      {/* <button onClick={handleresetScore}>Reset score</button> */}
    </div>
  );
}
export default React.memo(Player);
