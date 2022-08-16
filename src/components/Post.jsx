import React, { useState } from "react";
import { Link } from "react-router-dom";
import CloseButton from "react-bootstrap/CloseButton";
import { useDispatch } from "react-redux";
import { postDelete } from "../redux/actions";

function Post({ id, title, body, userId, avatar }) {
  const [deleteSign, setDeleteSign] = useState(false);
  const dispatch = useDispatch();
  function deletePost() {
    dispatch(postDelete(id));
  }
  return (
    <div className="post-item">
      <div className="img-container">
        <Link to={`/posts/${id}`}>
          <img src={avatar} alt="avatar" className="avatar" />
        </Link>
      </div>
      <div className="info-container">
        <div className="title-block">
          <h2 className="name">{title}</h2>
          <div
            onMouseEnter={() => setDeleteSign(true)}
            onMouseLeave={() => setDeleteSign(false)}
            className="id-block"
          >
            {deleteSign ? (
              <div>
                <CloseButton onClick={deletePost} variant="white" />
              </div>
            ) : (
              <span className="post-id">{id}</span>
            )}
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
