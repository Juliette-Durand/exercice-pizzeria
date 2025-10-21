import classes from './PizzaListItem.module.css'

function PizzaListItem( { pizza } ) {

    const formattedPrice = pizza.price.toFixed(2).toString().replace('.', ',');

    return (
        <>
            <img src={ pizza.image } alt={ pizza.name } className="thumbnail" />
            <strong>{ pizza.name }</strong> - { pizza.recipies } - <span>{ formattedPrice } €</span>
            <button className={ classes.edit } >Modifier</button>
            <button className={ classes.delete } >Supprimer</button>
        </>
    )
}

export default PizzaListItem