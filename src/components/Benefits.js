import React from 'react'
import { Carousel, Image, Row, Col } from 'react-bootstrap'
import firstSlide from '../images/PHOTO-2022-11-30-11-20-58 (3).jpg'

const Benefits = () => {

  return (
    <Carousel className='bg-dark' controls={false}>
      <Carousel.Item>
        <Image className="d-block w-100 mahn" src={firstSlide} alt="First slide" />
        <Carousel.Caption>
          <Row>
            <Col md={6}>
              <h2>Agents Benefits</h2>
              <h4>At Mini Stays we enjoy working in partnership with Letting Agents for long term mutual benefit</h4>
            </Col>
            <Col md={6}>
              <p>
                <ol>
                  <li>No need to find tenants.</li>
                  <li>No need to manage tenants.</li>
                  <li>No need to manage property but can still manage property if required.</li>
                  <li>Agents still receive their agents fee.</li>
                  <li>Less time and resources spent per property.</li>
                  <li>Comprehensive insurance policy to cover the all parties.</li>
                  <li>We are also regulated by The Property Ombudsman (TPO).</li>
                </ol>
              </p>
            </Col>
          </Row>
        </Carousel.Caption>
      </Carousel.Item>


    </Carousel>
  )
}

export default Benefits