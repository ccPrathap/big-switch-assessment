import React from "react";
import PropTypes from "prop-types";

const App = props => (
  <div className="container-fluid">
    {props.children}
  </div>
);

App.prototypes = {
  children: PropTypes.object.isRequired
};

export default App;