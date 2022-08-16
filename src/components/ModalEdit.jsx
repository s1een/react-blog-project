import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useSelector, useDispatch } from "react-redux";
import { closeEdit, postEdit } from "../redux/actions";
import Alert from "react-bootstrap/Alert";
import { postValidate } from "../hooks/usePosts";

function ModalEdit() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [id, setID] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const dispatch = useDispatch();
  const maxPost = useSelector((state) => state.postsReducer.posts.length);
  const show = useSelector((state) => state.appReducer.edit);
  function handleClose() {
    dispatch(closeEdit());
  }

  function handleSubmit() {
    if (postValidate(title, text) && id <= maxPost) {
      dispatch(postEdit(id, title, text));
      dispatch(closeEdit());
      setID("");
      setTitle("");
      setText("");
      showAlretSuccess();
    } else {
      showAlertError();
    }
  }

  function showAlretSuccess() {
    setIsSuccess(true);
    setIsError(false);
    setTimeout(() => {
      dispatch(closeEdit());
      setIsSuccess(false);
      setText("");
      setTitle("");
    }, 1000);
  }
  function showAlertError() {
    setIsError(true);
    setTimeout(() => {
      setIsError(false);
    }, 2000);
  }

  return (
    <Modal show={show} animation={true}>
      <Modal.Header closeButton onHide={handleClose}>
        <Modal.Title>Edit Post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <FloatingLabel label="Post ID">
              <Form.Control
                type="text"
                value={id}
                autoFocus
                onChange={(e) => setID(e.target.value)}
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="mb-3">
            <FloatingLabel label="Post Title">
              <Form.Control
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="mb-3">
            <FloatingLabel label="Post Body">
              <Form.Control
                as="textarea"
                style={{ height: "100px" }}
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </FloatingLabel>
          </Form.Group>
          {isSuccess && (
            <Alert variant="success">The post was successfully edited!</Alert>
          )}
          {isError && (
            <Alert variant="danger">
              Error editing post, please check the correctness of the entered
              data.
            </Alert>
          )}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Edit Post
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalEdit;
