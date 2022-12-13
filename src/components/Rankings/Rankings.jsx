import RankingsRow from '../RankingsRow/RankingsRow.jsx'
import './Rankings.css'

const Rankings = (props) => {
  if (!props.rankingsData) {
    return <div></div>
  }

  return (
    <div className='Rankings'>
      <h1 className='Rankings__page-title'>Рейтинг</h1>
      <div className='Rankings__info info'>
      
      {props.rankingsData.map((obj) => (
        <RankingsRow key={obj.power_rank} rankingsData={obj} icon='#' subPoints='pts' />
      ))}
      </div>
    </div>
  )
}

export default Rankings