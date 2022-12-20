import Button from "../Button/Button"
import { CartContext } from "../../context/CartContext"
import { useContext } from "react"

const CartWidget = () =>{
    const {getQuantity} = useContext(CartContext)

    const totalQuantity = getQuantity()

    return (
        <Button colorText='black'>
            <div>
                <img src={'./image/cart_icon.svg'} alt='carrito' width='14'/>
                { totalQuantity }
            </div>
        </Button>
    )
}

export default CartWidget