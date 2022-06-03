import React, {useState} from 'react'

export default function AddPlayer(props) {
    const {setPlayerList} = props
    const [newPlayer, setNewPlayer] = useState("");


  const handleNewPlayer =(e) => {
      setNewPlayer(e.target.value)
  }

  const handleSubmit = (e) =>{
      e.preventDefault();
    setPlayerList(cur=>[...cur,newPlayer])
    setNewPlayer('')
  }
  return (
    <form onSubmit={handleSubmit}>
    <label>
      Name:
      <input type="text" name="name" value={newPlayer} onChange={handleNewPlayer}/>
    </label>
    <input type="submit" value="Submit" />
  </form>
  )
}