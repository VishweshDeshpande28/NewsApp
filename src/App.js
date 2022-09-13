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
import {BrowserRouter} from 'react-router-dom';
import { useEffect } from 'react';


function Newsapp () {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    useEffect(() =>{
      setTimeout(() => setShow(true),80000);
    }, []);
    

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
    <>
    <BrowserRouter>
      <Navbar1 />
      <ProgressBar />
      <News />
      <Stories />

      <Footer />
      </BrowserRouter>

    </>
      </div>
    );
  }

export default Newsapp;

