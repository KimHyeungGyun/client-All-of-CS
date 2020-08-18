import React from "react";
import PropTypes from "prop-types";
import Nav from './Nav';

const AppLayout = ({ children }) => (
  <>
    <Nav />
    {children}
  </>
);

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
