import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import rootReducer from '../reducers'
import initialState from './initial-state';
import { reduxFirestore } from 'redux-firestore';
import firebase from 'firebase';
import { reactReduxFirebase } from 'react-redux-firebase';
import 'firebase/firestore';
import { firebaseConfig, reduxFirebase } from '../config'

export const history = createHistory();

const enhancers = []
const middleware = [
  thunk,
  routerMiddleware(history)
]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

firebase.initializeApp(firebaseConfig);
firebase.firestore();

const composedEnhancers = compose(
  reactReduxFirebase(firebase, reduxFirebase),
  reduxFirestore(firebase),
  applyMiddleware(...middleware),
  ...enhancers
)

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
)

export default store