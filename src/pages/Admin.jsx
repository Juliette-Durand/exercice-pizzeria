import classes from './Admin.module.css';
import PizzaForm from '../components/admin/pizza-form/PizzaForm';
import PizzaList from '../components/admin/pizza-list/PizzaList';

const Admin = () => {
    return (
        <main className={ classes['admin-container'] } >
            <PizzaForm />
            <PizzaList />
        </main>
    )
}

export default Admin;