const Button = (props) =>{
    return (
        <button onClick={props.click} className='boton' style = {{color:props.colorText}}>
            {props.children}
        </button>
    )
}

export default Button