import { GET_ALL_POSTS } from "../action-constant"
import Post from "../reducers/post"

export const getAllPostAction = (postList)=>dispatch=>{
dispatch({type:GET_ALL_POSTS,value:postList})
}