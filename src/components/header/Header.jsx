import classes from './Header.module.css';
import NavHeader from '../nav-header/NavHeader.jsx'

const Header = () => {

  return (
    <header>
      <h1>Pizzeria</h1>
      <p>Les meilleures pizzas artisanales</p>

      <NavHeader />
    </header>
  )
}

export default Header;