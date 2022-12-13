import NavItem from './../NavItem/NavItem.jsx'
import Logo from './../Logo/Logo.jsx'
import './Navbar.css'

const Navbar = (props) => {
  let arr = [
    {NavText: 'Рейтинг', link: '/'},
    {NavText: 'Турниры', link: '/tournaments'},
    // {NavText: 'Игроки', link: '/team'},
    {NavText: 'Правила', link: '/rules'}
  ]
  return (
    <nav>
      <Logo />
      <div className="links">
        { arr.map((obj) => (
          <NavItem key={obj.link} NavInfo={obj}/>
        ))}
      </div>
    </nav>
  )
}

export default Navbar