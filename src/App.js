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
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cities from "./components/navtabs/Cities"
import India from "./components/navtabs/India"
import Covid from "./components/navtabs/Covid"
import LiveTV from "./components/navtabs/LiveTV"
import Offbeat from "./components/navtabs/Offbeat"
import Opinion from "./components/navtabs/Opinion"
import People from "./components/navtabs/People"
import Trends from "./components/navtabs/Trends"
import Video from "./components/navtabs/Video"
import World from "./components/navtabs/World"
import Latest from "./components/navtabs/Latest"

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
    <>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> */}
          <Route path="./components/navtabs/Cities" element={<Cities />} />
          <Route path="./components/navtabs/Covid" element={<Covid />} />
          <Route path="./components/navtabs/India" element={<India />} />
          <Route path="./components/navtabs/Latest" element={<Latest />} />
          <Route path="./components/navtabs/LiveTV" element={<LiveTV />} />
          <Route path="./components/navtabs/Offbeat" element={<Offbeat />} />
          <Route path="./components/navtabs/Opinion" element={<Opinion />} />
          <Route path="./components/navtabs/People" element={<People />} />
          <Route path="./components/navtabs/Trends" element={<Trends />} />
          <Route path="./components/navtabs/Video" element={<Video />} />
          <Route path="./components/navtabs/World" element={<World />} />    
        {/* </Route> */}
      </Routes>
    </BrowserRouter>

      <Navbar1 />
      <ProgressBar />
      <News />
      <Stories />
      <Footer />

    </>
      </div>
    );
  }

export default Newsapp;

