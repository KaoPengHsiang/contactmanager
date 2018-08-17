import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = props => {
  const { branding } = props;
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
        <div className="container">
          <a href="/" className="navbar-brand">
            {branding}
          </a>

          <div>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link" style={{ color: "white" }}>
                  Home
                  <i className="fas fa-home pl-1 " />
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/contact/add"
                  className="nav-link"
                  style={{ color: "white" }}
                >
                  Add
                  <i className="fas fa-plus pl-1" />
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  className="nav-link"
                  style={{ color: "white" }}
                >
                  About
                  <i className="fas fa-question pl-1" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
Header.defaultProps = {
  branding: "my app"
};
Header.propTypes = {
  branding: PropTypes.string.isRequired
};

// const headingStyle = {
//     color:"green",
//     fontSize:"50px"
// };

export default Header;
