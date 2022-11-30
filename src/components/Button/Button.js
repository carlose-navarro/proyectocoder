const Button = (props) =>{
    return (
        <button className='boton' onClick={props.click} style = {{color:props.colorText}}>
            {props.children}
        </button>
    )
}

export default Button