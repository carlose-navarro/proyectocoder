import './Checkout.css'
import Button from "../Button/Button"
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import {collection, getDocs, query, where, documentId, writeBatch, addDoc} from 'firebase/firestore'
import { db } from "../../services/firebase/firebaseConfig"
import { useNavigate } from 'react-router-dom'


const Checkout =() => {

    const { cart, getTotal, clearCart } = useContext(CartContext)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userTel, setUserTel] = useState("");
    

    const handleCreateOrder = async () => {
        const buyer = []
        setLoading(true)

        try{
            const objOrder = {
                buyer : [userName, userEmail, userTel],
                //buyer: (`Name: ${userName}, Email: ${userEmail}, tel: ${userTel}`),
                Buyer: buyer,
                item: cart,
                total: getTotal()
            }

            const batch = writeBatch(db) //cajita de referencia

            const ids = cart.map(prod => prod.id) //mapeo los productos del carrito
            const productsRef = query(collection(db, 'products'), where(documentId(), 'in', ids))
            const prodAddCartFromFire = await getDocs(productsRef)
            const { docs } = prodAddCartFromFire 

            const outStock = [] //productos fuera de stock

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const prodAddCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = prodAddCart?.quantity //?: operador de Optional chaining

                //console.log('Stock en base: ', stockDb , 'Cantidad en carrito: ',prodQuantity)

                if(stockDb >= prodQuantity){
                    batch.update(doc.ref, {stock: stockDb - prodQuantity})
                } else{
                    outStock.push({id: doc.id, ...dataDoc})
                }
            })

            if(outStock.length === 0){
                await batch.commit()

                const orderRef = collection(db, 'orders')

                const orderAdd = await addDoc(orderRef, objOrder) 
                clearCart()
                alert('Se ha generado la orden correctamente', orderAdd.id)
                setTimeout(() => {
                    navigate('/')
                }, 2000)

                //console.log(orderAdd.id)
            }else{
                alert('Hay productos fuera de stock')
                console.error('Hay productos fuera de stock')
            }
        }catch(error){
            console.error(error)
        }finally{
            setLoading(false)
        }
    }

    if (loading){
        return(
            <h1>Generando Orden</h1>
        )
    }

//Logica del form inicio
    const onName = (e) =>{
        setUserName(e.target.value)
    }
    const onEmail = (e) =>{
        setUserEmail(e.target.value)
    }
    const onTel = (e) =>{
        setUserTel(e.target.value)
    }
    /* const sendData = (e) =>{
        e.preventDefault();
        console.log(`Name: ${userName}, Email: ${userEmail}, tel: ${userTel}`)
    } */
//Logica del form fin


    return(
        <div>
            <h2>VERIFIQUE SU COMPRA</h2>

{/* Formulario inicio*/}
            <div className='form_container'>
                <div className='form_top'>
                    <h2>Confirma tu <span>Compra</span></h2>
                </div>
                <form className='form_info' onSubmit={handleCreateOrder} action=''>
                    <input className='input'
                        type='text'
                        placeholder='&#128100; Nombre' required autoFocus
                        value={ userName }
                        onChange= {onName}
                        />
                    <input className='input' 
                        type='email' 
                        placeholder='&#128231; Email' required 
                        value={ userEmail }
                        onChange= {onEmail}
                        />
                    <input className='input' 
                        type='tel' 
                        placeholder='&#128241; Telefono' required
                        value={ userTel }
                        onChange= {onTel}
                    />
                    <div className='form_btn'>
                        <Button type="submit">Confirmar</Button>
                    </div>
                </form>
            </div>
{/* Formulario fin*/}
        </div>
    )

}

export default Checkout