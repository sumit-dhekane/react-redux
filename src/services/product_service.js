import axios from "axios";
import { getAllproductAction } from "../store/actions/product";

export const getAllProducts=()=>dispatch=>{

    axios.get('https://dummyjson.com/products').then(response=>{
         console.log(response.data)
         dispatch(getAllproductAction(response.data.products))
    })
}

