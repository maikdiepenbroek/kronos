import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as modal } from 'redux-modal';
import projects from './projects-reducer';
import { firestoreReducer } from 'redux-firestore';
import { firebaseStateReducer } from 'react-redux-firebase';

export default combineReducers({
  routing: routerReducer,
  modal,
  projects,
  firestore: firestoreReducer,
  firebase: firebaseStateReducer
});
