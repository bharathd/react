import React from "react";
import { Link } from "react-router-dom";
import { HouseFill } from "react-bootstrap-icons";
import { Navbar, Button, Badge } from "react-bootstrap";

const Navigationbar = () => {
  return (
    <Navbar bg="light">
      <Navbar.Brand href="#home">
        <Link class="navbar-brand" to="/">
          <HouseFill />
        </Link>
      </Navbar.Brand>

      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content">
        <Navbar.Text>
          <Link to="/myOrders" className="btn">
            <Button variant="success">My Orders</Button>
          </Link>
        </Navbar.Text>
      </Navbar.Collapse>
      <h1>
        <Badge variant="primary">Mock JSON Data</Badge>
      </h1>
    </Navbar>
  );
};

export default Navigationbar;
