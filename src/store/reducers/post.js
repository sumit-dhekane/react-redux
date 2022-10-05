import { GET_ALL_POSTS } from "../action-constant"

const Post = (state = [], action) => {

    switch(action.type) {

        case GET_ALL_POSTS:
            state = action.value
            return state

        default: return state
    }
    return state

}

export default Post