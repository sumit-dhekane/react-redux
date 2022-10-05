import React, { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { getAllProducts } from '../services/product_service'
function ProductTable(){

    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getAllProducts())
    },[])
    
    const store = useSelector((store)=>{return store})
    console.log(store)
    return(
        <table className='table table-dark table-striped'>
            <thead>
            <tr>
            <th>ID</th>
            <th>TITLE</th>
            <th>DESCRIPTION</th>
                <th>PRICE</th>
            </tr>
            </thead>
            <tbody>
                {
                    store.Product.map((p,i)=>(
                        <tr key={i}>
                <td>{p.id}</td>
                <td>{p.title}</td>
                <td>{p.description}</td>
                <td>{p.price}</td>
                </tr>
                    ))
                }
                
            </tbody>
        </table>
    )
}

export default ProductTable ;