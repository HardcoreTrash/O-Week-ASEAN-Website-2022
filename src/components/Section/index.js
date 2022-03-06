import React from 'react'
import PropTypes from 'prop-types'
import './Section.css'

function Section({title, content, sectionNo=1}) {
    if (sectionNo == 1) {
        return (
            <div>
                <h1 className='first_title'> {title} </h1>
                <div> {content} </div>
            </div>
        )
    }
    else {
        return (
            <div>
                <h1 className='second_title'> {title} </h1>
                <div> {content} </div>
            </div>
        )
    }
    // return (
    //     <div>
    //         <h1 className='first_title'> {title} </h1>
    //         <div> {content} </div>
    //     </div>
    // )
}

export default Section
