import './Button.css';

const Button = (props) =>{
    return (
        <button className='boton' onClick={props.click} >
            {props.children}
        </button>
    )
}

export default Button