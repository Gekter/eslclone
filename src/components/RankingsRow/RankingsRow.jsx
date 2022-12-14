import './RankingsRow.css'
import RankingsPlayers from './../RankingsPlayers/RankingsPlayers.jsx'

const RankingsRow = (props) => {
  return (
    <div className='rankings-row'>
      <div className="rankings-row__left-color"></div>
      <div className='rankings-row__rank rank'>
        <div className='rank__inner-text'>
          <span className='rank__icon'>{props.icon}</span>
          <span className='rank__number'>{props.rankingsData.power_rank}</span>
        </div>
      </div>
      <div className='rankings-row__points points'>
        <span className='points__number'>{Math.round(props.rankingsData.power_points)} <span className='points__sub'>{props.subPoints}</span></span>
      </div>
      <div className='rankings-row__team team'>
        <div className='team__logo'>
          <img src={props.rankingsData.logo} />
        </div>
        <div className='team__team-name'>
          <span className='team-name'>{props.rankingsData.name}</span>
        </div>
      </div>
      <RankingsPlayers players={props.rankingsData.activePlayers} />
      <div className='rankings-row__spacer'></div>
    </div>
  )
}

export default RankingsRow