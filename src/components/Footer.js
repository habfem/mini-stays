import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <hr></hr>

      <Container>

        <Row>
          <h4 className='text-center py-3'>CONTACT FOR SUPPORT</h4>
          <Col>
            <a href="mailto:akinwaleakindiya@yahoo.com" className="btn btn-outline-primary my-3"><i className="fas fa-at"></i> Send an mail</a>
          </Col>
          <Col>
            <a href="tel:+44734698781" className="btn btn-outline-primary my-3"><i className="fas fa-map-alt"></i>Locate US</a>
          </Col>
          <Col>
            <a href="tel:+44734698781" className="btn btn-outline-primary my-3"><i className="fas fa-mobile-alt"></i> Call US</a>
          </Col>
        </Row>
        <Row>
          <Col className='text-center py-3'>
            134, Shepperton
            Surrey, England.
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