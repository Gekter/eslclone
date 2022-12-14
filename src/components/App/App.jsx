import Navbar from './../Navbar/Navbar.jsx';
import './App.css';
import Rankings from './../Rankings/Rankings.jsx'
import Tournament from '../Tournament/Tournament.jsx';
import Rules from '../Rules/Rules.jsx';
import TournamentPage from '../TournamentPage/TournamentPage.jsx';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { useEffect } from 'react';
import { useState } from 'react';


const App = () => {


  const tournaments = [{
    id: 150,
    date: 'October 30th 2022',
    TournamentName: 'The International 2022',
    quality: 'TI',
    tournamentSize: 'XXL',
    teams: [
      {id: 1, name: 'Tundra Esport', pts: 1725.0, place: 1},
      {id: 2, name: 'Team Secret', pts: 1050.0, place: 2},
      {id: 3, name: 'Team Liquid', pts: 750.0, place: 3},
      {id: 4, name: 'Team Aster', pts: 600.0, place: 4},
    ]
  },
  {
    id: 149,
    date: 'August 28th 2022',
    TournamentName: 'ESL One Malaysia 2022',
    quality: 'B',
    tournamentSize: 'L',
    teams: [
      {id: 6, name: 'OG', pts: 340.0, place: 1},
      {id: 4, name: 'Team Aster', pts: 200.0, place: 2},
      {id: 2, name: 'Team Secret', pts: 156.0, place: 3},
      {id: 5, name: 'Fnatic', pts: 120.0, place: 4},
    ]
  },
  {
    id: 148,
    date: 'August 14th 2022',
    TournamentName: 'PGL Arlington Major 2022',
    quality: 'AA',
    tournamentSize: 'XL',
    teams: [
      {id: 6, name: 'Team Spirit', pts: 800.0, place: 1},
      {id: 4, name: 'PSG.LGD', pts: 480.0, place: 2},
      {id: 2, name: 'Team Aster', pts: 360.0, place: 3},
      {id: 5, name: 'OG', pts: 280.0, place: 4},
    ]
  },
  {
    id: 147,
    date: 'July 24th 2022',
    TournamentName: 'Riyadh Masters 2022',
    quality: 'A',
    tournamentSize: 'L',
    teams: [
      {id: 6, name: 'PSG.LGD', pts: 340.0, place: 1},
      {id: 4, name: 'Team Spirit', pts: 200.0, place: 2},
      {id: 2, name: 'OG', pts: 156.0, place: '3-4'},
      {id: 5, name: 'Team Secret', pts: 120.0, place: '3-4'},
    ]
  },
  {
    id: 146,
    date: 'July 14th 2022',
    TournamentName: 'DreamLeague Season 18 DPC WEU',
    quality: 'C',
    tournamentSize: 'M',
    teams: [
      {id: 6, name: 'Tundra Esports', pts: 87.5, place: 1},
      {id: 4, name: 'Team Liquid', pts: 52.5, place: 2},
      {id: 2, name: 'OG', pts: 40.0, place: 3},
      {id: 5, name: 'Entity', pts: 31.3, place: 4},
    ]
  },
  {
    id: 145,
    date: 'July 16th 2022',
    TournamentName: 'DPC SEA 2021/22 Tour 3',
    quality: 'D',
    tournamentSize: 'S',
    teams: [
      {id: 6, name: 'BOOM Esports', pts: 37.5, place: 1},
      {id: 4, name: 'Talon Esports', pts: 22.5, place: 2},
      {id: 2, name: 'Fnatic', pts: 12.0, place: 3},
      {id: 5, name: 'RSG', pts: 6.0, place: 4},
    ]
  },
  {
    id: 144,
    date: 'July 17th 2022',
    TournamentName: 'DPC CN 2021/22 Tour 3',
    quality: 'A',
    tournamentSize: 'XL',
    teams: [
      {id: 6, name: 'Royal Never Give Up', pts: 300.0, place: 1},
      {id: 4, name: 'Team Aster', pts: 180.0, place: 2},
      {id: 2, name: 'Xtreme Gaming', pts: 135.0, place: 3},
      {id: 5, name: 'PSG.LGD', pts: 105.0, place: 4},
    ]
  },
  
]

  const [teams, setTeams] = useState()
  // const [tournaments, setTournaments] = useState()

  const fetchRankings = () => {
    fetch('https://cdn1.api.esl.tv/dota2/worldranking/team/list')
      .then(res => res.json())
      .then(data => setTeams(data.items.filter(team => team.power_points !== 0).sort((a, b) => a.power_points < b.power_points ? 1 : -1)))
      
  }

  // const fetchTournament = () => {
  //   fetch('https://cdn1.api.esl.tv/dota2/worldranking/event/latest?limit=50&offset=0')
  //     .then(res => res.json())
  //     .then(data => setTournaments(data.items.filter(tournament => tournament.age_multiplier_power !== 0).sort((a, b) => a.age_multiplier_power < b.age_multiplier_power ? 1 : -1)))
  // }
  
  useEffect(() => {
    fetchRankings()
    // fetchTournament()
  }, [])

  return (
    <BrowserRouter>
      <div>
        <Navbar />


        <Routes>
          <Route path="/" element={<Rankings rankingsData={teams} />} />
        
          <Route path="/team" element={<div>
              <h2>TEAM</h2>
            </div>} />
            
          <Route path="/tournaments" element={<Tournament tournaments={tournaments}/>} />
          <Route path="/tournament/:id" element={<TournamentPage />} />
          <Route path="/rules" element={<Rules />} />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
