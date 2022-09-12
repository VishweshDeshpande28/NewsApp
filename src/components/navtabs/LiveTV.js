import React from 'react'
import Navbar1 from '../Navbar'
import Footer from '../Footer'
import { Col, Row } from 'react-bootstrap'

function LiveTV() {
  return (
    <div>
    <Navbar1/>



    <div className='container'>
    <>
      <h1>
        LiveTV by NewsMonkey
      </h1>
      <Row>
      <Col>
      <iframe class="responsive-iframe" width="500" height="320" src="https://www.youtube.com/embed/_sCuz36qPzg?controls=0" title="YouTube video player" frameborder="1" allow="accelerometer; encrypted-media; gyroscope" allowfullscreen></iframe>
      </Col>
        <Col>
      <iframe class="responsive-iframe" width="500" height="320" src="https://www.youtube.com/embed/pdb_aoahYoA?controls=0" title="YouTube video player" frameborder="1" allow="accelerometer; encrypted-media; gyroscope" allowfullscreen></iframe>
      </Col>
      <br />
      <Col>
      <iframe class="responsive-iframe" width="500" height="320" src="https://www.youtube.com/embed/uYY6R8t2HoE?controls=0" title="YouTube video player" frameborder="1" allow="accelerometer; encrypted-media; gyroscope" allowfullscreen></iframe>
      </Col>
      <Col>
      <iframe class="responsive-iframe" width="500" height="320" src="https://www.youtube.com/embed/LoAV0De5nPI?controls=0" title="YouTube video player" frameborder="1" allow="accelerometer; encrypted-media; gyroscope" allowfullscreen></iframe>
      </Col>
      </Row>
      </>
      </div>




      <Footer />
    </div>
  )
}

export default LiveTV
