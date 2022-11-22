import './NavItem.css'
import { Link } from "react-router-dom";

const NavItem = (props) => {
  return (
    <div>
      <Link to={props.NavInfo.link}>
        <span>{props.NavInfo.NavText}</span>
      </Link>
    </div>
  )
}

export default NavItem