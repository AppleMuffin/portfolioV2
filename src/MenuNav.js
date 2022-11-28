import { Link } from "react-router-dom";


const MenuNav = () => {
  return(
    <nav className="menuNav">
      <ul>
        <li className="home">
          <Link to="/" >Home</Link>
        </li>
        <li>
          <Link to="/about" >About</Link>
        </li>
        <li>
          <Link to="/skills" >Skills</Link>
        </li>
        <li>
          <Link to="/projects" >Projects</Link>
        </li>
        <li>
          <Link to="/contact" >Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default MenuNav;