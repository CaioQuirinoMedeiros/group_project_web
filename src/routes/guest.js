import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import store from '../store';

const Guest = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (!store.getState().auth.signedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to={{ pathname: '/', state: { from: props.location } }} />
    ))
    }
  />
);

Guest.propTypes = {
  component: PropTypes.shape().isRequired,
  location: PropTypes.shape(),
};

Guest.defaultProps = {
  location: null,
};

export default Guest;
