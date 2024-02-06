import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";

export default function HeaderPreview() {
  return (
    <>
      <Container
        fluid={"xs"}
        className="d-flex justify-content-center bg-black"
      >
        <Navbar expand="lg" className="bg-black ">
          <Container>
            <p className="m-0  text-white">
              Summer Sale For All Items in the shop and Express Delivery - OFF
              50%!
            </p>
          </Container>
        </Navbar>
      </Container>
    </>
  );
}
