import React from 'react';
import { Container } from 'react-bootstrap';

function Stories() {
  return (
    <Container>

    <h3>NewsMonkey - Top Stories</h3>
   <div className="my-3">
   <div className='row'>
   <div className='col'>
   <iframe width="320" height="350" src="https://www.youtube.com/embed/qqRQQadWeXo?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media" allowfullscreen></iframe>
   </div>
   <div className='col'>
   <iframe width="320" height="350" src="https://youtube.com/embed/5eaKYzdH2Oc?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media" allowfullscreen></iframe>
   </div>
   <div className='col'>
   <iframe width="320" height="350" src="https://youtube.com/embed/eYkhrTTJAds?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media" allowfullscreen></iframe>
   </div>
   </div>
</div>

<div className="my-3">
   <div className='row'>
   <div className='col'>
   <iframe width="320" height="350" src="https://youtube.com/embed/FQXHvC3-mDs?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media" allowfullscreen></iframe>
   </div>
   <div className='col'>
   <iframe width="320" height="350" src="https://youtube.com/embed/S8B1zJn_lT8?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media" allowfullscreen></iframe>
   </div>
   <div className='col'>
   <iframe width="320" height="350" src="https://youtube.com/embed/9mhWaFWGaFE?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media" allowfullscreen></iframe>
   </div>
   </div>
</div>
    </Container>
   
  )
}

export default Stories
