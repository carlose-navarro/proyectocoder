import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import './ItemListContainer.css'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from "../../services/firebase/firebaseConfig"


const ItemListContainer = ({greeting}) =>{
    const[products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const{categoryId} = useParams()

    useEffect(() => {
        setLoading(true)
        /* const productsRef = collection(db, 'products') */
        const productsRef = categoryId
        ? query (collection(db, 'products'), where ('category', '==', categoryId))
        : collection(db, 'products')

        getDocs(productsRef)
            .then(response => {
                const producsAdapted = response.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data}
                })
                setProducts(producsAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])

    if(loading){
        return <h1>Cargando....</h1>
    }

    return(
        <div >
            <h1>{greeting}</h1>
            <ItemList products={products} />  
        </div>
    )
}

export default ItemListContainer