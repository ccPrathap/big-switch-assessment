import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const App = props => <Fragment>{props.children}</Fragment>;

App.prototypes = {
  children: PropTypes.object.isRequired
};

export default App;