

function Photos(state=[],action){

    switch(action.type){

        case 'GET_ALL_PHOTOS' :

        state = action.value
       return state

       default: return state
    }
    return state
}
export default Photos;
