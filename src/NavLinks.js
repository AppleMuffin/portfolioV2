import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <ul>
      <li className="home"> 
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/skills">Skills</Link>
      </li>
      <li>
        <Link to="/projects">Projects</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  )
}

export default NavLinks;