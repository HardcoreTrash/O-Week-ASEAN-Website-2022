import React, {useState} from 'react'
import './Carousel.css'
import { images } from './Helper'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'

/*
Youtube link: https://www.youtube.com/watch?v=iyj3TZXg2gQ
*/

const Carousel = () => {

  const [currImg, setCurrImg] = useState(0)

  return (
    <div className='slide'>
      <div 
        className='slideInner' 
        style={{ backgroundImage: `url(${images[currImg].img})` }}
      >
        <div 
          className="left" 
          onClick={() => {
            currImg > 0 && setCurrImg(currImg - 1)
          }}
        >
          <ArrowBackIosIcon style={{fontSize: 30}} />
        </div>
        <div className="center"></div>
        <div 
          className="right"
          onClick={() => {
            currImg < images.length - 1 && setCurrImg(currImg + 1)
          }}
        >
          <ArrowForwardIosIcon style={{fontSize: 30}}/>
        </div>

      </div>
    </div>
  )
}

export default Carousel

