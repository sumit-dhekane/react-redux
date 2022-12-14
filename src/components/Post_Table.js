import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getAllPosts from "../services/post_services";
import DataTable from "./common/DataTable";


function PostTable(){
 
     const dispatch = useDispatch()
    useEffect(()=>{
     dispatch(getAllPosts())
    },[])

    const store= useSelector((store)=>{return store}) 

console.log(store)

return(
    // <table border='10px'>
    //     <thead className="thead">
    //     <tr>
    //     <th>USER_ID</th>
    //     <th>ID</th>
    //     <th>TITLE</th>
    //     <th>BODY</th>
    //     </tr>
    //     </thead>
    //     <tbody>
    //     {store.Post.map((p,i)=>(
    //         <tr key={i}>
    //             <td>{p.userId}</td>
    //             <td>{p.id}</td>
    //             <td>{p.title}</td>
    //             <td>{p.body}</td>
    //         </tr>
            
    //     ))}
    //     </tbody>
    // </table>
    <DataTable colomnNames={[{title:'UserId',key:'userId',type:'text'},
                             {title:'id',key:'id',type:'text'},
                             {title:'UserTitle',key:'title',type:'text'},
                             {title:'body',key:'body',type:'text'}]} dataList={store.Post} />
)

}

export default PostTable;

