import { useRef } from "react";
import { Link } from "react-router-dom";
const Nav = () => {

  const menuRef = useRef();
  const mobileSlide = useRef();
  let menuOpen = false;
  const toggleMenu = () => {

    if (!menuOpen) {
      menuRef.current.classList.add('open');
      menuOpen = true;
      mobileSlide.current.classList.add('open');
    } else {
      menuRef.current.classList.remove('open');
      menuOpen = false
      mobileSlide.current.classList.remove('open');
    }
  }

  const closeNav = () => {
    mobileSlide.current.classList.remove('open');
    toggleMenu()
  }

  return (
    <div className="navbar">
      <div onClick={toggleMenu} ref={menuRef} className="menuButton" >
        <div className="menuBurger">

        </div>
      </div>
      
      <nav className="mobileNav" ref={mobileSlide}>
        <ul>
          <li className="home">
            <Link to="/" onClick={closeNav}>Home</Link>
          </li>
          <li>
            <Link to="/about" onClick={closeNav}>About</Link>
          </li>
          <li>
            <Link to="/skills" onClick={closeNav}>Skills</Link>
          </li>
          <li>
            <Link to="/projects" onClick={closeNav}>Projects</Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeNav}>Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
    
  )
}

export default Nav;