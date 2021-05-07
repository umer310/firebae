import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UsersItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className="card text-center">
      <img src={avatar_url} className="round-img" style={{ width: "200px" }} />
      <h3>{login}</h3>
      <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
        more
      </Link>
    </div>
  );
};
UsersItem.propTypes = {
  user: PropTypes.object.isRequired,
};
export default UsersItem;
