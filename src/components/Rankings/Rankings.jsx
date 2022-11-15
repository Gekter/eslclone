import RankingsRow from '../RankingsRow/RankingsRow.jsx'
import './Rankings.css'

const Rankings = (props) => {
  return (
    <div className='Rankings'>
      <h1 className='Rankings__page-title'>Рейтинг</h1>
      <div className='Rankings__info info'>
      
      {props.rankingsData.map((obj) => (
        <RankingsRow key={obj.rank} rankingsData={obj} icon='#' subPoints='pts' />
      ))}
      </div>
    </div>
  )
}

export default Rankings