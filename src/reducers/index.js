import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import items from './items-reducer'

export default combineReducers({
  routing: routerReducer,
  items
})