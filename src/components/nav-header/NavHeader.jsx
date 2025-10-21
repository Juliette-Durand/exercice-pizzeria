import classes from './NavHeader.module.css';
import { NavLink } from 'react-router-dom';

const NavHeader = () => {

  return (
    <nav className={ classes.navbar }>
      <ul className={ classes['nav-links'] }>
        <li><NavLink to="/" className={ classes.link } >Accueil</NavLink></li>
        <li><NavLink to="/admin" className={classes.link}>Administration</NavLink></li>
      </ul>
    </nav>
  )
}

export default NavHeader;