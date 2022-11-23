import Button from "../Button/Button"

const handleOnClick = () =>{
    alert('Hice Click en el carrito')
}

const CartWidget = () =>{
    return (
        <Button click={handleOnClick} colorText='black'>
            <img src={'./image/cart.svg'} width='15'/>
            5
        </Button>
    )
}

export default CartWidget