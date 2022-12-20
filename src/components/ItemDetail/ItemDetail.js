import ItemCount from "../ItemCount/ItemCount";
import { useContext, /* useState */ } from "react";
import { CartContext } from "../../context/CartContext"
import Button from "../Button/Button";
import { Link } from 'react-router-dom' 

const ItemDetail = ({id, title, description, price, pictureUrl, stock}) =>{
    /* const [quantity, setQuantity] = useState(0) */

    const {addItem, isInCart} = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        addItem({id, title, price, quantity})
        /* setQuantity(quantity) */
    }

    return(
    <div>
        <h1>{title}</h1>
        <img src={pictureUrl} alt={title} style={{width: '200px'}}/>
        <p>{description}</p>
        <h2>$ {price}</h2>
        {   isInCart(id)
            /* quantity > 0 */
            ?   <Link to='/Cart'>
                    <Button>Terminar Compra</Button>
                </Link>
            : stock > 0 
                ? <ItemCount initial={0} stock={stock} onAdd={handleOnAdd}></ItemCount>
                : <h1>No hay stock</h1>
        }
        </div>
    )
}

export default ItemDetail