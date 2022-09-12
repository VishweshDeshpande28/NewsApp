import React from 'react'
import { Col, Row } from 'react-bootstrap'

const LiveTV = () => {
  return (
    <>

    <div className='container'>
    <>
      <h3>
        LiveTV by NewsByte
      </h3>
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
      </>
  )
}

export default LiveTV;
