import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Navbar = () => {
  const { authorizationToken, username, logout, searchText, updateSearchText } =
    useContext(AuthContext);
  return (
    <nav
      className="navbar navbar-expand-lg bg-dark navbar-dark"
      style={{ width: "100vw", height: "8vh" }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Task Management
        </Link>
        {authorizationToken && (
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2 mt-3"
                type="search"
                placeholder="Search here..."
                aria-label="Search"
                value={searchText}
                onChange={(e) => updateSearchText(e.target.value)}
              />
              {/* <button className="btn btn-outline-success">Search</button> */}
            </form>
          </div>
        )}
        {username.length > 0 && authorizationToken ? (
          <>
            <div className="d-none d-lg-flex">
              <button
                className="btn btn-danger mx-2"
                onClick={logout}
                style={{ width: "100%", maxWidth: "120px", minWidth: "80px" }}
              >
                Logout
              </button>
              <button
                className="btn btn-outline-success"
                style={{ width: "100%", maxWidth: "120px", minWidth: "80px" }}
              >
                {username}
              </button>
            </div>

            <div className="d-lg-none mt-0.5">
              <button
                className="btn btn-danger"
                onClick={logout}
                style={{ width: "100%", maxWidth: "120px", minWidth: "80px" }}
              >
                Logout
              </button>
            </div>
          </>
        ) : (
          <div className="d-flex">
            <Link
              className="btn btn-outline-success mx-2 d-none d-md-inline-block"
              to="/login"
              style={{ width: "100%", maxWidth: "120px", minWidth: "80px" }}
            >
              Login
            </Link>
            <Link
              className="btn btn-success d-none d-md-inline-block"
              to="/register"
              style={{ width: "100%", maxWidth: "120px", minWidth: "80px" }}
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
