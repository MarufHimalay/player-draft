import React from 'react';

const Selected = (props) => {
    
    return (
        <div>
            <img style={{width:"100px"}} src={props.player.image} alt=""/>
            <h4>{props.player.first_name}</h4>
        </div>
    );
};

export default Selected;