import { useEffect, useState } from 'react';
import './App.css';
import data from './data/data.json';
import Player from './components/Players/Player.js'
import Team from './components/Team/Team.js'



function App() {
  console.log(data)

  const [players, setPlayers] = useState([]);
  const [team, setTeam] = useState([]);

  const playerAddHandler = (player) => {
    const newTeam = [...team, player]
    setTeam(newTeam);
  }
  const PlayersStyle = {
    borderRight: '2px solid lightBlue'

  }

  return (
   <> 
    <h1 style={{textAlign: 'center'}}> Players Draft</h1>
    <h3 style={{textAlign: 'center'}}>Select Players to buy..</h3>    
    <section className="d-flex">

      
      
      
      
      <div style={PlayersStyle} className="col row row-cols-3 gx-4 gy-3 m-2 p-2 text-center">

        {
          data.map(player => <Player playerAddHandler={playerAddHandler} player={player} key={player.id}></Player>)
        }
      </div>
      <Team team ={team}></Team>

    </section>
    </>
  );
}

export default App;
