import React from 'react'
import PropTypes from 'prop-types'
import './Section.css'

function Section({title, content, sectionNo=1, backImage}) {
    if (sectionNo == 1) {
        return (
            <div className='first_back'>
                <h1 className='first_title'> {title} </h1>
                <div className='content_centre'> {content} </div>
            </div>
        )
    }
    else {
        return (
            <div className='second_back'>
                {/* <div style={{ backgroundImage: `url(${backImage})`, backgroundRepeat: 'no-repeat', height: '100vh', width: '100vw'}}/> */}
                <h1 className='second_title'> {title} </h1>
                <div className='content_centre'> {content} </div>
            </div>
        )
    }
}

export default Section
