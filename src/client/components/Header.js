import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
const Header = ({ auth }) => {
  const authButton = auth ? (
    <a className="ui item" href="/api/logout">
      Logout
    </a>
  ) : (
    <a className="ui item" href="/api/auth/google">
      Login
    </a>
  );
  return (
    <div className="ui secondary menu">
      <Link className="item" to="/">
        ReactSSR
      </Link>
      <div className="right menu">
        <Link className="ui item" to="/users">
          Users
        </Link>
        <Link className="ui item" to="/admins">
          Admins
        </Link>
        {authButton}
      </div>
    </div>
  );
};
const mapStateToProps = ({ auth }) => {
  return { auth };
};
export default connect(mapStateToProps)(Header);
