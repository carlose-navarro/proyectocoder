import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import Button from "../Button/Button"

const Cart = () =>{
    const { cart, removeItem, getTotal } = useContext(CartContext)

    const total = getTotal()

    return (
        <div>
            <h1>Finalizar compra</h1>
            {
                cart.map(prod =>{
                    return(
                        <div key={prod.id}>
                            <h1>{prod.title}</h1>
                            <h2>$ {prod.price}</h2>
                            <h2>Cantidad: {prod.quantity}</h2>
                            <h2>Subtotal: $ {prod.quantity * prod.price}</h2>
                            <Button click={() => removeItem(prod.id)}>Eliminar Producto</Button>
                        </div>
                    )
                })
            }

            <h1>Total: $ {total}</h1>
        </div>
    )
}

export default Cart