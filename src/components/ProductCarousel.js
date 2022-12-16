import React from 'react'
//import { Link } from 'react-router-dom'
import { Carousel, Image } from 'react-bootstrap'

const ProductCarousel = () => {

  return (
    <Carousel className='bg-dark'>
      <Carousel.Item>
        <Image className="d-block w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgKOsanD6ElbvaA9zdkPGvQ2P-eELU1px8ngAFrF5L&s" alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Image className="d-block w-100" src="https://images.pexels.com/photos/1482476/pexels-photo-1482476.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Image className="d-block w-100" src="https://media.istockphoto.com/id/1196604729/photo/3d-illustration-fire-ring-floating-in-the-dark.jpg?s=612x612&w=0&k=20&c=_jKWL6XOyBtrz90MflrS--qFR-JueiPLyd9VJw1uWyY=" alt="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  )
}

export default ProductCarousel