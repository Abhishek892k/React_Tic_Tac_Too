import { useState } from "react";

export default function Player({name,symbol}) {
    const [playername,setPlayerName] = useState(name);
    const [isEditing,setIsEditing] = useState(false);
    let playerNameContent = <span className="player-name">{playername}</span>;
    let playerNameBehavior = "Edit";
    function handlePlayerNameChange(event){
        console.log(event);
        setPlayerName(event.target.value);
    }
    function handleClick(){
        setIsEditing((isEditing)=>!(isEditing));
    }
    if(isEditing){
        playerNameBehavior = "Save"
        playerNameContent = <input type="text" required value={playername} onChange={handlePlayerNameChange}/>;
    }
  return (
    <>
      <li>
        <span className="player">
          {playerNameContent}
          <span className="player-symbol">{symbol}</span>
        </span>
      </li>
      <button onClick={handleClick}>{playerNameBehavior}</button>
    </>
  );
}
