import React from "react";
import logo from "../assets/html.png";
import { useDispatch } from "react-redux";
import { showEdit, showModal, userLogout } from "../redux/actions";
import { Link } from "react-router-dom";
import ReactAudioPlayer from "react-audio-player";
import { useSelector } from "react-redux";
import Dropdown from "react-bootstrap/Dropdown";

function Header() {
  const login = useSelector((state) => state.appReducer.user.login);
  const dispatch = useDispatch();
  function addPost() {
    dispatch(showModal());
  }
  function editPost() {
    dispatch(showEdit());
  }
  function logOut() {
    dispatch(userLogout());
  }
  return (
    <header>
      <nav className="navbar">
        <Link to="/react-blog-project">
          <img
            src={logo}
            alt="logo"
            width="40px"
            height="40px"
            className="logo"
          />
        </Link>
        <ul className="nav-items">
          <ReactAudioPlayer
            src="https://p.scdn.co/mp3-preview/83af91f483d64fe264c4e769ee2724ccbb41c053?cid=f6a40776580943a7bc5173125a1e8832"
            controls
            volume={0.2}
            loop
            className="player-audio"
          />
          <Dropdown>
            <Dropdown.Toggle
              disabled={login}
              id="dropdown-button-dark-example1"
              variant="secondary"
              className="menu-header"
            >
              Menu
            </Dropdown.Toggle>
            <Dropdown.Menu variant="dark">
              <Dropdown.Item onClick={addPost}>Create</Dropdown.Item>
              <Dropdown.Item onClick={editPost}>Update</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={logOut}>LogOut</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <li>
            <Link to="/posts">Post List</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
