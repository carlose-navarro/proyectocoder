import { useState, createContext} from 'react';

export const CartContext = createContext({cart: []})

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const addItem = (productToAdd) => {
    if(!isInCart(productToAdd.id)){
        setCart([...cart, productToAdd])
    }
    }

    const isInCart = (id) => {
        return cart.some(product => product.id === id)
    }

    const getQuantity = () =>{
        let acc = 0

        cart.forEach(prod =>{
            acc += prod.quantity
        })
    return acc
    }

    const getTotal = () => {
        let acc = 0

        cart.forEach(prod => {
            acc += prod.quantity * prod.price
        })
        return acc
    }

    const removeItem = (id) => {
        const updateCart = cart.filter(prod => prod.id !== id)

        setCart(updateCart)
    }

    console.log(cart)



    return (
        <CartContext.Provider value={{ cart, addItem, isInCart, getQuantity, getTotal, removeItem}}>
            { children }
        </CartContext.Provider>
    )
}
