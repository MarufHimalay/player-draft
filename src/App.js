import { useEffect, useState } from 'react';
import './App.css';
import Player from './components/Players/Player.js'
import Team from './components/Team/Team.js'

// here I imported data from a fake API. if it doesn't work for some reason pls checkout 
//my fake data from data folder
// import data from './data/data.json';

function App() {

  const [players, setPlayers] = useState([]);
  useEffect(() => {
    fetch('https://run.mocky.io/v3/c5084761-dd92-4232-8376-722263ee8f95')
      .then(res => res.json())
      .then(data => setPlayers(data))
  }, [])


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
      <nav style={{ backgroundColor: 'lightGreen' }} className='p-2'><h1 style={{ textAlign: 'center' }}> Players Draft</h1></nav>
      <h3 style={{ textAlign: 'center' }}>Select Players to buy..</h3>
      <div className="d-flex">
        <div style={PlayersStyle} className="col row row-cols-3 gx-4 gy-3 m-2 p-2 text-center">
          {
            players.map(player => <Player playerAddHandler={playerAddHandler} player={player} key={player.id}></Player>)
          }
        </div>
        <Team team={team}></Team>
      </div>
    </>
  );
}

export default App;
