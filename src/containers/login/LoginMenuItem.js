import React, { Component } from 'react';
import { NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { show } from 'redux-modal';

class LoginMenuItem extends Component {
  render() {
    const { displayName } = this.props;
    return (
      <LinkContainer to="/login">
        <NavItem>{(displayName === undefined) ? 'Login' : displayName}</NavItem>
      </LinkContainer>
    );
  }
}

const mapStateToProps = state => ({
  displayName: state.firebase.auth.displayName
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ show }, dispatch);

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(LoginMenuItem)