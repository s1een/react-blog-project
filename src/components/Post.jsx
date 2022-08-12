import React from "react";
import { Navigate, useNavigate } from "react-router";
import avatar from "../assets/avatar.png";
import avatar2 from "../assets/avatar2.png";
import avatar3 from "../assets/avatar3.png";
import avatar4 from "../assets/avatar4.png";
import avatar5 from "../assets/avatar5.png";
import avatar6 from "../assets/avatar6.png";
import { Link } from "react-router-dom";

const avatars = [avatar, avatar2, avatar3, avatar4, avatar5, avatar6];
function shuffle() {
  return Math.floor(Math.random() * avatars.length);
}
function Post({ id, title, body, userId }) {
  return (
    <div className="post-item">
      <div className="img-container">
        <Link to={`/posts/${id}`}>
          <img
            src={avatars[shuffle(avatars)]}
            alt="avatar"
            className="avatar"
          />
        </Link>
      </div>
      <div className="info-container">
        <div className="title-block">
          <h2 className="name">{title}</h2>
          <div className="id-block">
            <span className="post-id">{id}</span>
          </div>
        </div>
        <hr className="line" />
        <div className="text">
          <p>{body}</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
