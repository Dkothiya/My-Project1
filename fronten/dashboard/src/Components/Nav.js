import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Nav() {
  const auth = localStorage.getItem("user");
  const Navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    Navigate("/signup");
  };

  return (
    <div>
      <img
        alt="logo"
        className="logo"
        src="https://yt3.googleusercontent.com/ytc/APkrFKZ2MZZcwiRZwDCd719cQbBhD7lt4pHypApsByXZCA=s900-c-k-c0x00ffffff-no-rj"
      />
      {auth ? (
        <ul className="nav-ul">
          <li>
            <Link to="/">Product</Link>
          </li>
          <li>
            <Link to="/add">Add Product</Link>
          </li>
          <li>
            <Link to="/update">Update Product</Link>
          </li>

          <li>
            <Link to="/profile">Profile</Link>
          </li>

          <li>
            <Link to="/signup" onClick={logout}>
              Logout({JSON.parse(auth).name})
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="nav-ul nav-right">
          <li>
            <Link to="/signup">SignUp</Link>
          </li>
          <li>
            <Link to="login">Login</Link>
          </li>
        </ul>
      )}
    </div>
  );
}
