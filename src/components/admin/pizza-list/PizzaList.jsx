import classes from './PizzaList.module.css'
import { pizzas } from '../../../../db.js'
import PizzaListItem from '../pizza-list-item/PizzaListItem.jsx'

const PizzaList = () => {

const listPizzasComponents = pizzas.map((objPizza) =>
        <li key={ objPizza.id }><PizzaListItem pizza={ objPizza } /></li>
    );

    return (
        <section className={ classes['pizza-list'] } >
            <h2>Liste des Pizzas</h2>
            <ul>
                { listPizzasComponents }
            </ul>
        </section>
    )
}

export default PizzaList;