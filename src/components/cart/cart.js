import './Cart.css'
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import Button from "../Button/Button"
import { Link } from "react-router-dom"

const Cart = () =>{
    const { cart, removeItem, getTotal } = useContext(CartContext)

    const total = getTotal()

    return (
        <div className='form_container_cart'>
            <h1 className='form_top_prod'>Mi carrito</h1>
            {
                cart.map(prod =>{
                    return(
                        <div className='form_vist_prod' key={prod.id}>
                            <div className='form_img_vist_prod'>
                                <img src={prod.pictureUrl} alt={prod.title} style={{width: '100px'}}/>
                            </div>
                            <div className='form_data_vist_prod'>
                                <h2>{prod.title}</h2>
                                <h3>$ {prod.price}</h3>
                                <h3>Cantidad: {prod.quantity}</h3>
                                <h3>Subtotal: $ {prod.quantity * prod.price}</h3>
                            </div>
                            <div>
                            <Button click={() => removeItem(prod.id)}>Eliminar Producto</Button>
                            </div>
                        </div>
                    )
                })
            }

            <h1>Total: $ {total}</h1>
            <Link to='/'>
                <Button>Seguir comprando</Button>
            </Link>
            <Link to='/checkout'>
                <Button>Terminar compra</Button>
            </Link>
        </div>
    )
}

export default Cart