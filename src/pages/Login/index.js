import React, { useState } from "react";
import { Form, Input, Button, Card, Col, Row, Divider } from "antd";
import loginLogo from "assets/images/pollnation_dark_v1.png";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

function Login() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, loginEmail, loginPassword).then(
      (response) => {
        const user = response.user.accessToken;
        console.log(user);

        const data = {
          loginEmail,
          loginPassword,
          tenant: "demo",
        };
        const requestOptions = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${user}`,
          },
          body: JSON.stringify(data),
        };
        fetch("https://api.thepollnation.com/dev/login", requestOptions)
          .then((response) => response.json())
          .then((response) => {
            const items = sessionStorage.setItem(
              "items",
              JSON.stringify(response.body.token.secret)
            );
            // console.log(response.body.currentUser.account.role);
            // console.log(response.body.token.secret);
            // console.log(response.body);
            // if (response.body.currentUser.account.role === "MANAGER") {
            window.location = "/assets";
            // }
          });
      }
    );
  };

  return (
    <Row
      justify="center"
      align="middle"
      style={{ height: "80vh", marginTop: "10vh" }}
    >
      <Card style={{ width: 500 }}>
        <Row justify="center" align="middle">
          <img src={loginLogo} alt="logo" style={{ width: "40vh" }} />
        </Row>
        <Divider style={{ borderWidth: 2, borderColor: "#F1EDED" }} />
        <Row justify="center" align="middle">
          <Col span={24}>
            <Form layout="vertical" initialValues={{ remember: true }}>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Please enter your email!" },
                ]}
              >
                <Input
                  placeholder="Email..."
                  onChange={(event) => {
                    setLoginEmail(event.target.value);
                  }}
                />
              </Form.Item>
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please enter your password!" },
                ]}
              >
                <Input.Password
                  placeholder="Password..."
                  onChange={(event) => {
                    setLoginPassword(event.target.value);
                  }}
                />
              </Form.Item>
              <Row>
                <Col style={{ width: "50%" }}>
                  <Form.Item>
                    <Button
                      onClick={handleSubmit}
                      //   loading={userState.loading}
                      style={{
                        width: "100%",
                        borderRadius: "10px",
                        background: "blue",
                        color: "white",
                        marginTop: "20px",
                      }}
                    >
                      Login
                    </Button>
                  </Form.Item>
                </Col>
                <Col style={{ width: "50%" }}>
                  <Form.Item>
                    <Button
                      //   onClick={loginAppUser}
                      //   loading={userState.loading}
                      style={{
                        width: "100%",
                        borderRadius: "10px",
                        background: "blue",
                        color: "white",
                        marginTop: "20px",
                      }}
                    >
                      Sign Up
                    </Button>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Card>
    </Row>
  );
}

export default Login;
