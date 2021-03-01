import React, { useState } from 'react';


const Player = (props) => {
    const {first_name, last_name, image, salary} = props.player;
    const playerAddHandler = props.playerAddHandler;
    const [ isClicked, setIsClicked ] =  useState(false);
    return (
        <div  className="d-flex">
        <div style={{ backgroundColor: 'white'}}>
            <img style={{maxHeight:"200px", maxWidth:"200px"}} src={image} alt=""/>
            <h4>{first_name}</h4>
            <p>${salary}</p>
            </div>
        <div className="p-2">
            <button disabled={isClicked} onClick={() =>  {
                playerAddHandler(props.player)
                setIsClicked(true) 
             }} className="btn btn-success">
                {isClicked ? "✓" : <i class="fas fa-user-plus"></i>}
            </button>
        </div>
            </div>
        
    );
};

export default Player;