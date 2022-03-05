import React from 'react'
import './Carousel.css'
import ItemOne from './CarouselImages/test.jpg'

export const images = [
  {title: "Item 1", subtitle: "Description of Item 1", img: ItemOne},
];

const Carousel = () => {
  return (
    <div className='slide'>
      <div className='slideInner'>
        <img src={images[0].img}
      </div>
    </div>
  )
}

export default Carousel

