import React from 'react';
import Selected from '../Players/SelectedPlayer/Selected';


const Team = (props) => {
    const team = props.team;
    const totalSalary = team.reduce((sum, player) => sum + parseFloat(player.salary), 0)
    return (
        <div>
            <div className="m-2 p-2 pt-5 text-center">
                <h3>Total Selected Players: <span style={{ fontWeight: '700' }}>{team.length}</span> </h3>
                <h4 style={{ fontWeight: '600' }}>Cost Total: $ {totalSalary.toFixed(2)}</h4>
                <br></br>
                <h3>Selected Players</h3>
            </div>
            <div className="text-center p-2 mt-2">
                {
                    team.map(player => <Selected player={player} key={player.id}></Selected>)
                }
            </div>
        </div>
    );
};

export default Team;