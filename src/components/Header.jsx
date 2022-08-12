import React from "react";
import logo from "../assets/html.png";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { showModal } from "../redux/actions";
import { Link } from "react-router-dom";

function Header() {
  const dispatch = useDispatch();
  function addPost() {
    dispatch(showModal());
  }
  function deletePost() {}
  return (
    <header>
      <nav className="navbar">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            width="40px"
            height="40px"
            className="logo"
          />
        </Link>
        <ul className="nav-items">
          <li>
            <Button onClick={addPost} variant="outline-light">
              Create
            </Button>
          </li>
          <Link to="/posts">Post List</Link>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
