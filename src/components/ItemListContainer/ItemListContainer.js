import Counter from "../Counter/Counter"

const ItemListContainer = ({greeting}) =>{

    const handleOnAdd = (quantity) => {
        if (quantity > 0){
            console.log('Se agregaron ' + quantity)
        }
    }

    return(
        <div>
            <h1>{greeting}</h1>
            <Counter initial={0} stock={10} onAdd={handleOnAdd}></Counter>
        </div>
        
    )
}

export default ItemListContainer