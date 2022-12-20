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
            <a href="mailto:akinwaleakindiya@yahoo.com" className="btn btn-outline-primary my-3"><i className="fas fa-at"></i> Send an mail</a>
          </Col>
          <Col>
            <a href="https://www.google.com/maps/dir/9.0744743,7.4449575/Shepperton,+United+Kingdom/@28.4685035,-18.8758575,4z/data=!3m1!4b1!4m10!4m9!1m1!4e1!1m5!1m1!1s0x48767415353ce5ff:0x95410734ad9dda3!2m2!1d-0.452653!2d51.389617!3e0?hl=en" target='_blank' rel='noreferrer' className="btn btn-outline-primary my-3"><i className="fas fa-map-marker"></i> Locate US</a>
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