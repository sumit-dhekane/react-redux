import {configureStore} from '@reduxjs/toolkit'
import Product from './reducers/product'
import {combineReducers,legacy_createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import Post from './reducers/post'

const reducers = combineReducers({Product,Post})
// const store = configureStore({reducer:{product:Product}}
// )
const store = legacy_createStore(reducers,applyMiddleware(thunk))

export default store; 