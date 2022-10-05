 const Product = (state=[],action)=>{

    switch(action.type){

        case 'GET_ALL_PRODUCTS':
            state = action.value
            return state
            

        default : return state    
    }
    return state

}

export default Product;