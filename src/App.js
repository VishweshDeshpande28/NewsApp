import './App.css';
import React from 'react';
import Navbar1 from './components/Navbar';
import News from './components/News';
import ProgressBar from "react-scroll-progress-bar";
import {useState} from 'react';
import {Modal} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Stories from './components/Stories';
import Footer from './components/Footer';

function Newsapp () {
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);

    return (
      <div>
      <>
      <Modal show={show} onHide={handleClose}>

        <Modal.Body><b>Get Breaking News alerts. </b> <br /> <br /> Stay updated with latest news, opinions and much more. </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Don't Allow
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Allow
          </Button>
        </Modal.Footer>
      </Modal>
    </>
      <ProgressBar />
        <Navbar1 />
        <br />
        <News />
        <Stories />
        <Footer />
      </div>
    );
  }

export default Newsapp;

