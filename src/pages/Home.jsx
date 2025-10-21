import MainGrid from '../components/home/main-grid/MainGrid.jsx'
import Cart from '../components/home/cart/Cart.jsx'

import classes from './Home.module.css'

const Home = () => {
    return (
        <main className={ classes['main-container'] } >
            <MainGrid />

            <Cart />
        </main>
    )
}

export default Home;