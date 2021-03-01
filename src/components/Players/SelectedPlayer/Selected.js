import React from 'react';

const Selected = (props) => {

    return (
        <div style={{ border: '2px solid green' }} className='m-2 p-2'>
            <img style={{ width: "100px" }} src={props.player.image} alt="" />
            <h4>{props.player.first_name}</h4>
        </div>
    );
};

export default Selected;