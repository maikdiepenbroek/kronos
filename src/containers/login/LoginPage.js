import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import GoogleButton from 'react-google-button';

export const LoginPage = ({ firebase, auth }) => (
  <div className="">
    <GoogleButton
      onClick={() => firebase.login({ provider: 'google', type: 'popup' })}
      disabled={!isEmpty(auth)}
    >
    </GoogleButton>

    <div>
      <h2>Auth</h2>
      {isLoaded(auth) && !isEmpty(auth)? (
        <div>
          <span>Logged in</span>
          <button onClick={() => firebase.logout()}>Logout</button>
        </div>
      ): (
        <span>Please login</span>
      )}
    </div>
  </div>
);

LoginPage.propTypes = {
  firebase: PropTypes.shape({
    login: PropTypes.func.isRequired
  }),
  auth: PropTypes.object
};

export default compose(
  firebaseConnect(),
  connect(({ firebase: { auth } }) => ({ auth }))
)(LoginPage);
