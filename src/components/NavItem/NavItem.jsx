import './NavItem.css'

const NavItem = (props) => {
  return (
    <div>
      <a href={props.NavInfo.link}>
        <span>{props.NavInfo.NavText}</span>
      </a>
    </div>
  )
}

export default NavItem