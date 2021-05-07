import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ title }) => {
  return (
    <nav className="navbar btn-primary">
      <h1>
        <i className="fa fa-github"></i> {title}
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};
Navbar.defaultProps = {
  title: "Githhub Finder",
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
