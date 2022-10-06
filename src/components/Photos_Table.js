import { useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux'
import getAllphotos from "../services/photos_service";


function PhotosTable(){

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAllphotos())
    },[])
    const store = useSelector((store)=>{return store})

    console.log(store)

    return (
        <table className='table table-success table-striped'>
            <thead>
            <tr>
            <th>ALBUM_ID</th>
            <th>ID</th>
            <th>TITLE</th>
            <th>URL</th>
            <th>THUMNAIL_URL</th>
            </tr>
            </thead>
            <tbody>
            {store.Photos.map((e,i)=>(
                <tr key={i}>
                    <td>{e.albumId}</td>
                    <td>{e.id}</td>
                    <td>{e.title}</td>
                    <td><img src={e.url}></img></td>
                    <td><img src={e.thumbnailUrl}></img></td>
                </tr>
                
            ))}
            </tbody>
        </table>
    )
}

export default PhotosTable;