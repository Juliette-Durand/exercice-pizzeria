import classes from './PizzaCard.module.css';

import CardContent from '../card-content/CardContent.jsx'
import CardButton from '../card-button/CardButton.jsx'

const PizzaCard = ( { pizza } ) => {

return (
    <div className={ classes['pizza-card'] } >

      <img src={ pizza.image } alt={ pizza.name } />

      <CardContent name={ pizza.name } recipies={ pizza.recipies } price={ pizza.price } />

      <div className={ classes.buttons } >
        <CardButton onClick="" />
      </div>
    </div>
  )
}

export default PizzaCard;