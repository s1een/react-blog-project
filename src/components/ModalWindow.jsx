import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useSelector, useDispatch } from "react-redux";
import { closeModal, postCreate } from "../redux/actions";
import Alert from "react-bootstrap/Alert";

function ModalWindow() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const dispatch = useDispatch();
  const show = useSelector((state) => state.appReducer.modal);
  const id = useSelector((state) => state.postsReducer.posts.length);
  function handleClose() {
    dispatch(closeModal());
  }
  function handleSubmit() {
    if (postValidate()) {
      dispatch(postCreate(title, text, id + 1));
      sendPost();
      showAlretSuccess();
    } else {
      showAlertError();
    }
  }

  async function sendPost() {
    try {
      let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
          title: title,
          body: text,
          userId: 1,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      let result = await response.json();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
  function postValidate() {
    if (
      title &&
      text &&
      title.length > 5 &&
      title.length < 80 &&
      text.length > 5 &&
      title.length < 400
    ) {
      return true;
    } else {
      return false;
    }
  }

  function showAlretSuccess() {
    setIsSuccess(true);
    setIsError(false);
    setTimeout(() => {
      dispatch(closeModal());
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
        <Modal.Title>Create Post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <FloatingLabel label="Post Title">
              <Form.Control
                type="text"
                autoFocus
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
            <Alert variant="success">The post was successfully created!</Alert>
          )}
          {isError && (
            <Alert variant="danger">
              Error creating post, please check the correctness of the entered
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
          Create Post
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalWindow;
