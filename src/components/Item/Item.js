import { Link } from "react-router-dom"

const Item = ({product}) => {
    return(
        <div >
            <img src={product.pictureUrl} alt={product.title} style={{width: 200}}/>
            <h3>{product.title}</h3>
            <p> $ {product.price}</p>
            <Link to={`/detail/${product.id}`}>Ver detalle</Link>
        </div>
    )
}

export default Item