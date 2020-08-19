import React from "react";
import PropTypes from "prop-types";
import Navbar from './Navbar';

const AppLayout = ({ children }) => (
  <>
    <Navbar />
    {children}
  </>
);

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
