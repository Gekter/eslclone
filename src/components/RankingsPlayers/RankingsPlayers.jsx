import './RankingsPlayers.css'

const RankingsPlayers = (props) => {
  return (
    <div className='players'>
      {props.players.map((obj) => (
        
        <span key={obj.id} className='player'>
          {obj.name}
        </span>
      ))}
    </div>
  )
}

export default RankingsPlayers