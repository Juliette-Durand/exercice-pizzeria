import classes from './MainGrid.module.css';
import { pizzas } from '../../../../db.js'

import PizzaCard from '../pizza-card/PizzaCard.jsx'

const MainGrid = () => {

  const listPizzasComponents = pizzas.map((objPizza) =>
    <PizzaCard key={ objPizza.id } pizza={ objPizza } />
  );

  return (
    <section className={ classes['menu-container'] } >

      { listPizzasComponents }

    </section>
  )
}

export default MainGrid;