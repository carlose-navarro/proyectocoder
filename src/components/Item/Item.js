import { Link } from "react-router-dom"
import Button from "../Button/Button";
import './Item.css';

const Item = ({product}) => {
    return(
        <div className= 'productVista'>
            <img src={product.pictureUrl} alt={product.title} />
            <h3>{product.title}</h3>
            <p> $ {product.price}</p>
            <Link to={`/detail/${product.id}`}>
                <Button>
                    Ver detalle
                </Button>
            </Link>
        </div>
    )
}

export default Item