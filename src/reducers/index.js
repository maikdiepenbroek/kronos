import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as modal } from 'redux-modal'
import projects from './projects-reducer'

export default combineReducers({
  routing: routerReducer,
  modal,
  projects
})