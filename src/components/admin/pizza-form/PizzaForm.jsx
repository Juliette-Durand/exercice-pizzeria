import classes from './PizzaForm.module.css'

const PizzaForm = () => {

return (
        <section className={ classes["pizza-form"] } >
            <h2>Ajouter / Modifier une Pizza</h2>
            <form id="pizzaForm" >

                <input type="hidden" id="pizzaIndex" />

                <input type="text" id="pizzaName" placeholder="Nom de la pizza" required />
                <textarea id="pizzaDescription" placeholder="Description" required ></textarea>
                <input type="decimal" id="pizzaPrice" placeholder="Prix (€)" required />
                <input type="text" id="pizzaImage" placeholder="URL de l'image" required />

                <button type="submit" id="submitBtn" >Enregistrer</button>
            </form>
        </section>
    )
}

export default PizzaForm;