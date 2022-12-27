import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <hr></hr>

      <Container>

        <Row>
          <h4 className='text-center py-3'>CONTACT US</h4>
          <Col>
            <a href="mailto:info@pinionpropety.co.uk" className="btn btn-outline-primary my-3"><i className="fas fa-at"></i> Send an mail</a>
          </Col>
          <Col>
            <a href="https://www.google.com/maps/place/349+Shelton+New+Rd,+Stoke-on-Trent,+UK/@53.0126648,-2.2112351,17z/data=!3m1!4b1!4m5!3m4!1s0x487a6810c291e8af:0x2d086ffe4a1393e6!8m2!3d53.0126648!4d-2.2086602?hl=en" target='_blank' rel='noreferrer' className="btn btn-outline-primary my-3"><i className="fas fa-map-marker"></i> Locate US</a>
          </Col>
          <Col>
            <a href="tel:+44734698781" className="btn btn-outline-primary my-3"><i className="fas fa-mobile-alt"></i> Call US</a>
          </Col>
        </Row>
        <Row>
          <Col className='text-center py-3'>
            394 Shelton New Road stoke-on-Trent.
          </Col>
        </Row>
        <hr></hr>

        <Row>
          <Col className='text-center py-3'>
            Copyright &copy; Mini Stays
          </Col>
        </Row>
      </Container>

    </footer>

  )
}

export default Footer