import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import GoogleButton from 'react-google-button';
import './login.css';

export const LoginPage = ({ firebase, auth }) => (
  <div className="login">
    <h2>Auth</h2>
    <GoogleButton
      onClick={() => firebase.login({ provider: 'google', type: 'popup' })}
      disabled={!isEmpty(auth)}
    >
    </GoogleButton>
    {isLoaded(auth) && !isEmpty(auth) ? (
      <div>
        <span>Logged in</span>
        <p><Button bsStyle="danger" onClick={() => firebase.logout()}>Logout</Button></p>
      </div>
    ) : (
        <span>Please login</span>
      )}
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
