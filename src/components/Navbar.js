import { Routes, Route, Link } from "react-router-dom";
import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LiveTV from "./LiveTV";
import People from "./People";
import World from "./World";
import Covid from "./Covid";
import India from "./India";
import Latest from "./Latest";
import Offbeat from "./Offbeat";
import Trends from "./Trends";
import Video from "./Video";
import Opinion from "./Opinion";
import Cities from "./Cities"

function Navbar1(){
    return (
      <>
          <Navbar bg="black" expand="lg" variant="dark">
            <Container fluid>
              <Navbar.Brand href="/">NewsByte</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  <Nav.Link as={Link} to="/LiveTV">
                    LiveTV
                  </Nav.Link>
                  <Nav.Link as={Link} to="/People">
                    People
                  </Nav.Link>
                  <Nav.Link as={Link} to="/Latest">
                    Latest
                  </Nav.Link>
                  <Nav.Link as={Link} to="/India">
                    India
                  </Nav.Link>
                  <Nav.Link as={Link} to="/Covid">
                    Covid
                  </Nav.Link>
                  <Nav.Link as={Link} to="/Opinion">
                    Opinion
                  </Nav.Link>
                  <Nav.Link as={Link} to="/Video">
                    Video
                  </Nav.Link>
                  <Nav.Link as={Link} to="/Cities">
                    Cities
                  </Nav.Link>
                  <Nav.Link as={Link} to="/World">
                    World
                  </Nav.Link>
                  <Nav.Link as={Link} to="/Offbeat">
                    Offbeat
                  </Nav.Link>
                  <Nav.Link as={Link} to="/Trends">
                    Trends
                  </Nav.Link>
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



          <div>
            <Routes>
              <Route exact path="/LiveTV" element={<LiveTV/>} />

              <Route exact path="/People" element={<People/>} />
              
              <Route exact path="/Cities" element={<Cities />} />

              <Route exact path="/Trends" element={<Trends />} />

              <Route exact path="/Trends" element={<Trends />} />
              
              <Route exact path="/Offbeat" element={<Offbeat />} />

              <Route exact path="/World" element={<World />} />

              <Route exact path="/Video" element={<Video />} />

              <Route exact path="/Opinion" element={<Opinion />} />

              <Route exact path="/Covid" element={<Covid />} />

              <Route exact path="/India" element={<India />} />

              <Route exact path="/Latest" element={<Latest />} />


            </Routes>
            
          </div>
</>
     
    )
  };

  export default Navbar1;