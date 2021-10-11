import React from "react";
import "./index.css";
import { Navbar, Nav, Button, Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <header>
        <Navbar
          collapseOnSelect
          expand="md"
          fixed="top"
          style={{ background: "#0a66c2" }}
          className="px-3 py-2 text-white"
        >
          <Link to="/" className="text-decoration-none">
            <Navbar.Brand className=" text-white">send FREIGHT</Navbar.Brand>
          </Link>

          <InputGroup className="" style={{ width: "auto", minwidth: "250px" }}>
            <InputGroup.Text
              id="cityTo"
              className="pe-1 text-white"
              style={{
                background: "#4296e97d",
                borderRight: "none",
              }}
            >
              Search
            </InputGroup.Text>
            <Form.Control
              type="search"
              name="search"
              id="search"
              style={{
                minwidth: "250px",
                width: "400px",
                background: "#4296e97d",
                borderRight: "none",
                borderLeft: "none",
              }}
              className="mx-auto text-white rounded-0 form-g2"
            />
            <InputGroup.Text
              id="cityTo"
              className="ps-1 search-img"
              style={{
                background: "#4296e97d",
                borderLeft: "none",
              }}
            >
              <img src="images/baseline_search_white_24dp.png" alt="search" />
            </InputGroup.Text>
          </InputGroup>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Button
                className=" mx-2 px-3 py-2"
                style={{ background: "#0a66c2", fontSize: "14px" }}
              >
                Request Quote
              </Button>
              <Button
                className=" mx-2 px-3 py-2"
                style={{
                  background: "#0eff99bf",
                  fontSize: "14px",
                }}
              >
                Book Shipment
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    </div>
  );
}

export default Header;
