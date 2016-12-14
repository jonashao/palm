import { combineReducers } from 'redux'
import posts from './posts'
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
    posts,
    routing: routerReducer
})

export default rootReducer
