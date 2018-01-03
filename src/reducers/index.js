import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import projects from './projects-reducer'

export default combineReducers({
  routing: routerReducer,
  projects
})