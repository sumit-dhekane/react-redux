
import axios from 'axios'
import getAllphotosAction from '../store/actions/photos'

const getAllphotos= ()=>dispatch=>{

 axios.get('https://jsonplaceholder.typicode.com/photos').then(response=>{

       console.log(response.data)
      dispatch(getAllphotosAction(response.data))
 })

}
export default getAllphotos