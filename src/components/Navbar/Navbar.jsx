import NavItem from './../NavItem/NavItem.jsx'
import Logo from './../Logo/Logo.jsx'
import './Navbar.css'

const Navbar = (props) => {
  let arr = [
    {id: '1', NavText: 'Рейтинг', link: '/'},
    {id: '2', NavText: 'Турниры', link: '/tournaments'},
    {id: '3', NavText: 'Игроки', link: '/team'}
  ]
  return (
    <nav>
      <Logo />
      <div className="links">
        { arr.map((obj) => (
          <NavItem key={obj.id} NavInfo={obj}/>
        ))}
      </div>
    </nav>
  )
}

export default Navbar