import classes from './Cart.module.css';

const Cart = () => {

return (
    <aside className={ classes['cart-section'] } >
      <h2 className={ classes['cart-title'] } >Votre Panier</h2>

      <div className={ classes['cart-items'] } >
      </div>

      <p className={ classes['cart-total'] } >Total : €</p>
    </aside>
  )
}

export default Cart;