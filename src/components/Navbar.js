import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navbar1() {
  return (
    <>
 <Navbar bg="dark" expand="lg" variant='dark' >
      <Container fluid>
        <Navbar.Brand href="/">News Monkey</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>
            <Nav.Link href="#LiveTV">LIVE TV</Nav.Link>
            <Nav.Link href="#Latest">LATEST</Nav.Link>
            <Nav.Link href="#India">INDIA</Nav.Link>
            <Nav.Link href="#Covid">COVID</Nav.Link>
            <Nav.Link href="#Opinion">OPINION</Nav.Link>
            <Nav.Link href="#Video">VIDEO</Nav.Link>
            <Nav.Link href="#Cities">CITIES</Nav.Link>
            <Nav.Link href="#World">WORLD</Nav.Link>
            <Nav.Link href="#Offbeat">OFFBEAT</Nav.Link>
            <Nav.Link href="#Trends">TRENDS</Nav.Link>
            <Nav.Link href="#People">PEOPLE</Nav.Link>
          </Nav>
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
