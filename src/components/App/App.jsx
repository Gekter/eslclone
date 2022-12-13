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
  const rankingsData = [{
    rank: 1,
    points: 1797,
    logo: 'https://apiesltv.imgix.net/images/team/logo/144_5c4b715f-5ae2-4a97-b8fa-e5247778cc58.png?auto=compress&w=60',
    teamName: 'Tundra Esport',
    players: [
      {id: 1, name: '33'},
      {id: 2, name: 'Sneyking'},
      {id: 3, name: 'Saksa'},
      {id: 4, name: 'Nine'},
      {id: 5, name: 'Skiter'}
    ]
  },
  {
    rank: 2,
    points: 1260,
    logo: 'https://apiesltv.imgix.net/images/team/logo/9_96f563ad-e742-42fd-885e-c19cdffe7f10.png?auto=compress&w=60',
    teamName: 'Team Secret',
    players: [
      {id: 6, name: 'Resolution'},
      {id: 7, name: 'Crystallis'},
      {id: 8, name: 'Puppey'},
      {id: 9, name: 'Zayac'},
      {id: 10, name: 'Nisha'}
    ]
  },
  {
    rank: 3,
    points: 1028,
    logo: 'https://apiesltv.imgix.net/images/team/logo/59_7f503d31-0e15-498f-ac5f-66698b9aba99.png?auto=compress&w=60',
    teamName: 'Team Aster',
    players: [
      {id: 11, name: '皮球 (Siamese.C)'},
      {id: 12, name: 'Ori'},
      {id: 13, name: 'Borax'},
      {id: 14, name: 'Xxs'},
      {id: 15, name: 'Monet'}
    ]
  },
  {
    rank: 4,
    points: 1010,
    logo: 'https://apiesltv.imgix.net/images/team/logo/4_54682d73-cab3-4598-978e-7eeaef3b6bfe.png?auto=compress&w=60',
    teamName: 'PSG.LGD',
    players: [
      {id: 16, name: 'NothingToSay'},
      {id: 17, name: 'Ame'},
      {id: 18, name: 'XinQ'},
      {id: 19, name: 'Faith_bian'},
      {id: 20, name: 'y`'}
    ]
  },
  {
    rank: 5,
    points: 771,
    logo: 'https://apiesltv.imgix.net/images/team/logo/7_0a00ca09-3989-48fb-b65f-23693c487d97.png?auto=compress&w=60',
    teamName: 'OG',
    players: [
      {id: 21, name: 'Taiga'},
      {id: 22, name: 'ATF'},
      {id: 23, name: 'Yuragi'},
      {id: 24, name: 'bzm'},
      {id: 25, name: 'Misha'}
    ]
  },
  {
    rank: 6,
    points: 731,
    logo: 'https://apiesltv.imgix.net/images/team/logo/30_96565151-6554-4814-8733-7eb039f3e7e9.png?auto=compress&w=60',
    teamName: 'Team Spirit',
    players: [
      {id: 26, name: 'Miposhka'},
      {id: 27, name: 'Yatoro'},
      {id: 28, name: 'TORONTOTOKYO'},
      {id: 29, name: 'Collapse'},
      {id: 30, name: 'Mira'}
    ]
  },
  ]


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
