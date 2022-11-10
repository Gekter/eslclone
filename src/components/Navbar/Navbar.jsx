import NavItem from './../NavItem/NavItem.jsx'
import Logo from './../Logo/Logo.jsx'
import './Navbar.css'

const Navbar = (props) => {
  let arr = [
    {id: '1', NavText: 'Главная', link: '#1'},
    {id: '2',NavText: 'Рейтинг', link: '#2'},
    {id: '3',NavText: 'Турниры', link: '#3'}
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