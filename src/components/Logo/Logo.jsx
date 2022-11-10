import './Logo.css'
import Logosvg from './Logo.svg'

const Logo = (props) => {
  return (
    <div className='logo'>
      <img src={Logosvg} alt="Логотип" />
    </div>
  )
}

export default Logo