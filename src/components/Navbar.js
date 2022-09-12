import { Outlet } from '@mui/icons-material';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navbar1() {
  return (
    <>
 <Navbar bg="black" expand="lg" variant='dark' >
      <Container fluid>
        <Navbar.Brand href="/">NewsByte</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>
            <Nav.Link to="./navtabs/LiveTV.js">LIVE TV</Nav.Link>
            <Nav.Link to="./navtabs/Latest.js">LATEST</Nav.Link>
            <Nav.Link to="./navtabs/India.js">INDIA</Nav.Link>
            <Nav.Link to="./navtabs/Covid.js">COVID</Nav.Link>
            <Nav.Link to="./navtabs/Opinion.js">OPINION</Nav.Link>
            <Nav.Link to="./navtabs/Video.js">VIDEO</Nav.Link>
            <Nav.Link to="./navtabs/Cities.js">CITIES</Nav.Link>
            <Nav.Link to="./navtabs/World.js">WORLD</Nav.Link>
            <Nav.Link to="./navtabs/Offbeat.js">OFFBEAT</Nav.Link>
            <Nav.Link to="./navtabs/Trends.js">TRENDS</Nav.Link>
            <Nav.Link to="./navtabs/People.js">PEOPLE</Nav.Link>
          </Nav>
          <Outlet/>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Navbar1;
