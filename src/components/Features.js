import React from 'react'
import { Row, Col, Image } from 'react-bootstrap';
import miniStays from '../images/PHOTO-2022-11-30-11-25-30.jpg';

const Offers = () => {
  return (
    <>
      <h3 className='text-center'>Features and Benefits of working with Mini Stays:</h3>
      <br></br>
      <Row>
        <Col className='pad' md={6}>
          <Row>
            <i className='fas fa-check-circle'>   Short-term Lets</i>
          </Row>
          <br></br>
          <Row>
            <i className='fa-solid fa-wifi'>     Fast Internet</i>
          </Row>
          <br></br>
          <Row>
            <i className='fa-solid fa-mug-saucer'>     Fully-Equipped Kitchen</i>
          </Row>
          <br></br>
          <Row>
            <i className='fas fa-tv'>     Smart TV with streaming channels</i>
          </Row>
          <br></br>
          <Row>
            <i className='fas fa-couch'>     Confortable Furnitures</i>
          </Row>
          <br></br>
          <Row>
            <i className='fa-solid fa-bed'>     Cozy Beds</i>
          </Row>
          <br></br>
          <Row>
            <i className='fas fa-bath'>     Sleek Bathroom</i>
          </Row>
          <br></br>
          <Row>
            <i className='fa fa-diamond'>     Profesionally Cleaned</i>
          </Row>

        </Col>
        <Col className='pad' md={6}>
          <Image src={miniStays} alt='mini-stays' fluid />
        </Col>
      </Row>
    </>
  )
}

export default Offers