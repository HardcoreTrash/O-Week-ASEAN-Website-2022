import React from 'react'
import PropTypes from 'prop-types'
import './Section.css'
import Button from '../Header/Button'

const onClick = (link) => {
  return function() {
      window.open(link);
  } 
}

function Section({title, content, sectionNo=1}) {
    if (sectionNo == 1) {
        return (
            <div className='first_back'>
                <h1 className='first_title'> {title} </h1>
                <div className='content_centre'> {content} </div>
            </div>
        )
    }
    else if (sectionNo == 2) {
        return (
            <div className='second_back'>
                <h1 className='second_title'> {title} </h1>
                <div className='content_centre'> {content} </div>
            </div>
        )
    }
    else {
        return (
            <div className='first_back'>
                <h1 className='first_title'> {title} </h1>
                <div className='content_centre'> {content} </div>
                <div className='UAC_button'>
                    <Button text='Learn More' onClick={onClick('https://www.unswaseanconference.com/')}/>
                </div>
            </div>
        )
    }
}

export default Section
