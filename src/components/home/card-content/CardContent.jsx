import classes from './CardContent.module.css';

const CardContent = ( { name, recipies, price } ) => {

  const formattedPrice = price.toFixed(2).toString().replace('.', ',');

  return (
    <>
      <h2>{ name }</h2>
      <p className={ classes.description } >{ recipies }</p>
      <p className={ classes.price } >{ formattedPrice } €</p>
    </>
  )
}

export default CardContent;