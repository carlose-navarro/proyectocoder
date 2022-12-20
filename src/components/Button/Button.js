import './Button.css';

const Button = (props) =>{
    return (
        <button disabled={props.count===0} className='boton' onClick={props.click} >
            {props.children}
        </button>
    )
}

export default Button