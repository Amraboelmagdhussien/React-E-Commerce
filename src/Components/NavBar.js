import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

export default function NavBar() {
  let sessionLogin = JSON.parse(sessionStorage.getItem("login") || "[]");
  console.log(sessionLogin);
  const [logout, setLogout] = useState(false);
  const [refresh, setRefresh] = useState(0);
  useEffect(() => {
    let showBtn = () => {
      if (sessionLogin.length > 0) {
        console.log(true);
        setLogout(true);
      } else {
        console.log(false);
        setLogout(false);
      }
    };

    showBtn();
  }, []);

  const refreshKeys = () => {
    setRefresh((prevKey) => prevKey + 1);
    let showBtn = () => {
      if (sessionLogin.length > 0) {
        setLogout(true);
      } else {
        setLogout(false);
      }
    };

    showBtn();
  };

  const logoutFunc = () => {
    sessionLogin.pop();
    sessionStorage.setItem("login", JSON.stringify(sessionLogin));
    refreshKeys();
  };

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Mobile Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="d-flex justify-content-center align-items-center">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to={"/prods"}>
                Products
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/signup"
                className="d-flex align-items-center"
              >
                {sessionLogin.length === 0 && (
                  <p className="mb-0">Sign Up / Sign In</p>
                )}
                {sessionLogin.length > 0 && (
                  <p className="mb-0" onClick={logoutFunc}>
                    Logout
                  </p>
                )}
              </Nav.Link>
              <Nav.Link as={Link} to={"/wishes"}>
                {sessionLogin.length > 0 && (
                  <p className="mb-0">
                    <i class="fa-solid fa-heart"></i> WishList
                  </p>
                )}
              </Nav.Link>
              <Nav.Link as={Link} to={"/cartStuff"}>
                {sessionLogin.length > 0 && (
                  <p className="mb-0">
                    <i class="fa-solid fa-cart-shopping"></i> Cart
                  </p>
                )}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
