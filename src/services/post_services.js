import axios from "axios"
import { getAllPostAction } from "../store/actions/posts"


const getAllPosts= ()=>dispatch=>{

    axios.get('https://jsonplaceholder.typicode.com/posts').then(response=>{
        console.log(response.data)
        dispatch(getAllPostAction(response.data))
    })
}
export default getAllPosts;