import React, { useState } from 'react';


const Player = (props) => {
    const { first_name, last_name, image, salary, country } = props.player;
    const playerAddHandler = props.playerAddHandler;
    const [isClicked, setIsClicked] = useState(false);
    return (
        <div className="d-flex">
            <div style={{ backgroundColor: 'lightGreen', border: '3px solid green' }} className="p-3">
                <img style={{ maxHeight: "200px", maxWidth: "200px" }} src={image} alt="" />
                <h4>{first_name}</h4>
                <h5>{last_name}</h5>
                <p>${salary}</p>
                <h4>{country}</h4>
            </div>
            <div className="p-2">
                <button disabled={isClicked} onClick={() => {
                    playerAddHandler(props.player)
                    setIsClicked(true)
                }} className="btn btn-success">
                    {isClicked ? "✓" : <i className="fas fa-user-plus"></i>}
                </button>
            </div>
        </div>

    );
};

export default Player;