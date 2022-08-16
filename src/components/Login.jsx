import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { userLogin } from "../redux/actions";
import { useSelector } from "react-redux";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkBox, setCheckBox] = useState(false);
  const dispatch = useDispatch();
  // const user = useSelector((state) => state.appReducer.user);

  function handleSubmit(e) {
    // todo user register
    if (loginValudate(email, password, checkBox)) {
      dispatch(userLogin(email, password));
    } else {
      // todo error msg
      console.log("error");
    }
  }
  function loginValudate(email, pass, check) {
    let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    if (regex.test(email) && pass.length >= 8 && pass.length <= 20 && check) {
      return true;
    }
    return false;
  }
  return (
    <div className="post-item login">
      <Form className="login-form">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            value={checkBox}
            onChange={() => setCheckBox((prev) => !prev)}
            label="Check me outI agree with the rules (what? lol..)"
          />
        </Form.Group>
        <Button variant="primary" onClick={(e) => handleSubmit(e)}>
          Login
        </Button>
      </Form>
    </div>
  );
}
