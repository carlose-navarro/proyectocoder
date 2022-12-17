import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import { getProducts, getProductsByCategory} from '../asyncMock'
import { useParams } from "react-router-dom"
import './ItemListContainer.css'

const ItemListContainer = ({greeting}) =>{

    const[products, setProducts] = useState([])

    const{categoryId} = useParams()

    useEffect(() => {

        if(categoryId){
            getProductsByCategory(categoryId)
            .then(response=>{
                setProducts(response)
            })
            .catch(error =>{
                console.log(error)
            })
        }else{
            getProducts()
            .then(response => {
                setProducts(response)
            })
            .catch(error =>{
                console.log(error)
            })
        }
    }, [categoryId])



    return(
        <div >
            <h1>{greeting}</h1>
            <ItemList products={products} />  
        </div>
        
    )
}

export default ItemListContainer