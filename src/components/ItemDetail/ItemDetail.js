import Counter from "../Counter/Counter";

const ItemDetail = ({id, title, description, price, pictureUrl, stock}) =>{

    const handleOnAdd = (quantity) => {
        if (quantity > 0){
            console.log('Se agregaron ' + quantity)
        }
    }

    return(
    <div>
        <h1>{title}</h1>
        <img src={pictureUrl} alt={title} style={{width: 200}}/>
        <p>{description}</p>
        <h2>$ {price}</h2>
        {stock > 0 ? <Counter initial={0} stock={stock} onAdd={handleOnAdd}></Counter> : <h1>No hay stock</h1>}
        </div>
    )
}

export default ItemDetail