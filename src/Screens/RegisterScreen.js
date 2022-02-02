import axios from "axios";
import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";


export const RegisterScreen = () => {
  let [email, setEmail] = useState("");
  let [username, setUsername] = useState();
  let [password, setPassword] = useState("");
  let [firstname, setFirstName] = useState("");
  let [lastname, setLastName] = useState("");

  let [phone,setPhone] = useState()

  let submitHandler = (e) => {
    e.preventDefault();

if (email && username && password && firstname !== "") {

     
//   fetch("https://fakestoreapi.com/users", {
//   method: "POST",
//   body: JSON.stringify({
//     email: email,
//     username: username,
//     password: password,
//     name: {
//       firstname: firstname,
//       lastname: lastname,
//     },
//     phone: phone,
//   }),
// })
//   .then((res) => res.json())
//   .then((json) => console.log(json));
   
  async function Fe(){
      let config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      let { data } = await axios.post(
        "https://fakestoreapi.com/users",
        config,
        {
          email: email,
          username: username,
          password: password,
          name: {
            firstname: firstname,
            lastname: lastname,
          },
          phone: phone,
        }
      );

      console.log(data);

  }
   Fe()
}

     else {
      alert("Some fields are missing");
    }
  };

  useEffect(() => {}, []);

  return (
    <div>
      <Container style={{ marginTop: "9rem", minHeight: "80vh" }}>
        <Row>
          <h4
            className="d-block text-center my-5 fs-1 fw-bold text-uppercase py-2"
            style={{
              borderBottom: "1px solid green",
              width: "40rem",
              margin: "0 auto",
            }}
          >
            Register
          </h4>
        </Row>
        <Row className="d-flex align-items-center justify-content-center">
          <Col md-4>
            <form onSubmit={submitHandler} className="d-block w-100">
              <input
                type="text"
                placeholder="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                placeholder="username"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="text"
                placeholder="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="text"
                placeholder="firstname"
                className="form-control"
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                placeholder="lastname"
                className="form-control"
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
              />
              <input
                type="text"
                placeholder="phone Number"
                className="form-control"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <button
                className="my-4 w-25 bg-primary text-white"
                type="submit"
                style={{ display: "block", height: "5rem", fontSize: "2rem" }}
              >
                Add Product
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
