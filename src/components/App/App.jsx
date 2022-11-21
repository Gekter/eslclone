import Navbar from './../Navbar/Navbar.jsx';
import './App.css';
import Rankings from './../Rankings/Rankings.jsx'

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
  fetch('https://cdn1.api.esl.tv/dota2/worldranking/teamhistory/rankings?date=2022-8-16')


  return (
    <div>
      <Navbar />
      <Rankings rankingsData={rankingsData} />
    </div>
  );
}

export default App;
