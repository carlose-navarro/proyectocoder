import Button from "../Button/Button"
import {useState} from 'react'


const Counter = ({initial, stock, onAdd}) =>{

    const [count, setCount] = useState(initial)

    const increment = () =>{
        if(count < stock){
            setCount(count + 1)
        }
    }
    const decrement = () =>{
        if(count > initial){
            setCount(count - 1)
        }
    }
    const reset = () =>{
            setCount(initial)
    }

    return(
        <div>
            <h2>{count}</h2>
            <Button click={reset}>Limpiar</Button>
            <Button click={decrement}>-</Button>
            <Button click={increment}>+</Button>
            <Button click={() =>onAdd(count)} >Añadir al carrito</Button>
        </div>
    )
}

export default Counter