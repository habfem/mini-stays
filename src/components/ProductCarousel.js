import React from 'react'
import { Carousel, Image } from 'react-bootstrap'
import firstSlide from '../images/PHOTO-2022-11-30-11-20-59.jpg'
import secondSlide from '../images/PHOTO-2022-11-30-11-20-58 (1).jpg'
import thirdSlide from '../images/PHOTO-2022-11-30-11-20-58 (2).jpg'
import fourthSlide from '../images/PHOTO-2022-11-30-11-25-30.jpg'
import fifthSlide from '../images/PHOTO-2022-11-30-11-20-58.jpg'

const ProductCarousel = () => {

  return (
    <Carousel className='bg-dark'>
      <Carousel.Item>
        <Image className="d-block w-100" src={firstSlide} alt="First slide" />
        <Carousel.Caption className='needy'>
          <h3 className='nah'>Work Area</h3>
          <h4 className='nah'>Mini Stays.</h4>

          <p>We are a national relocation company specialising in providing short term accommodation for business travellers, professionals and contractors from all sectors of industry. We also provide short term accommodation for leisure.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Image className="d-block w-100" src={secondSlide} alt="Second slide" />
        <Carousel.Caption className='needy'>
          <h3 className='nah'>Dining Area</h3>
          <h4 className='nah'>Mini Stays.</h4>

          <p>We are a national relocation company specialising in providing short term accommodation for business travellers, professionals and contractors from all sectors of industry. We also provide short term accommodation for leisure.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Image className="d-block w-100" src={thirdSlide} alt="Third slide" />
        <Carousel.Caption className='needy'>
          <h3 className='nah'>Bed-room</h3>
          <h4 className='nah'>Mini Stays.</h4>

          <p>We are a national relocation company specialising in providing short term accommodation for business travellers, professionals and contractors from all sectors of industry. We also provide short term accommodation for leisure.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Image className="d-block w-100" src={fourthSlide} alt="Fourth slide" />
        <Carousel.Caption className='needy'>
          <h3 className='nah'>Kitchen</h3>
          <h4 className='nah'>Mini Stays.</h4>

          <p>We are a national relocation company specialising in providing short term accommodation for business travellers, professionals and contractors from all sectors of industry. We also provide short term accommodation for leisure.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Image className="d-block w-100" src={fifthSlide} alt="Fifth slide" />
        <Carousel.Caption className='needy'>
          <h3 className='nah'>Bathroom</h3>
          <h4 className='nah'>Mini Stays.</h4>

          <p>We are a national relocation company specialising in providing short term accommodation for business travellers, professionals and contractors from all sectors of industry. We also provide short term accommodation for leisure.</p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  )
}

export default ProductCarousel