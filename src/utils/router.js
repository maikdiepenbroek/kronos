// import connectedAuthWrapper from 'redux-auth-wrapper/connectedAuthWrapper';
// import { history } from '../store';

// const AUTHED_REDIRECT = 'AUTHED_REDIRECT'
// const UNAUTHED_REDIRECT = 'UNAUTHED_REDIRECT'

// /**
//  * @description Higher Order Component that redirects to `/login` instead
//  * rendering if user is not authenticated (default of redux-auth-wrapper).
//  * @param {Component} componentToWrap - Component to wrap
//  * @return {Component} wrappedComponent
//  */
// export const UserIsAuthenticated = connectedReduxRedirect({
//   // eslint-disable-line new-cap
//   wrapperDisplayName: 'UserIsAuthenticated',
//   authSelector: ({ firebase: { auth } }) => auth,
//   authenticatingSelector: ({ firebase: { auth, isInitializing } }) =>
//     !auth.isLoaded || isInitializing,
//   predicate: auth => !auth.isEmpty,
//   redirectAction: newLoc => dispatch => {
//     history.replace(newLoc)
//     dispatch({
//       type: UNAUTHED_REDIRECT,
//       payload: { message: 'User is not authenticated.' }
//     })
//   }
// })

// /**
//  * @description Higher Order Component that redirects to listings page or most
//  * recent route instead rendering if user is not authenticated. This is useful
//  * routes that should not be displayed if a user is logged in, such as the
//  * login route.
//  * @param {Component} componentToWrap - Component to wrap
//  * @return {Component} wrappedComponent
//  */
// export const UserIsNotAuthenticated = UserAuthWrapper({
//   // eslint-disable-line new-cap
//   wrapperDisplayName: 'UserIsNotAuthenticated',
//   allowRedirectBack: false,
//   failureRedirectPath: (state, props) =>
//     // redirect to page user was on or to list path
//     props.location.query.redirect || '/login',
//   authSelector: ({ firebase: { auth } }) => auth,
//   authenticatingSelector: ({ firebase: { auth, isInitializing } }) =>
//     !auth.isLoaded || isInitializing,
//   predicate: auth => auth.isEmpty,
//   redirectAction: newLoc => dispatch => {
//     history.replace(newLoc)
//     dispatch({ type: AUTHED_REDIRECT })
//   }
// })

// export default {
//   UserIsAuthenticated,
//   UserIsNotAuthenticated
// }