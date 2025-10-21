import classesApp from '../../../App.module.css';
import classes from './CardButton.module.css';

const CardButton = ( { onClick } ) => {

  return (
    <button className={ `${classesApp.btn} ${classes.order}` } >Commander</button>
  )
}

export default CardButton;