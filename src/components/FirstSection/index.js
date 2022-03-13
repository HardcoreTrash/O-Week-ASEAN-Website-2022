import React from 'react'
import PropTypes from 'prop-types'
import './FirstSection.css'

function index({title, content, video}) {
    return (
        <div className='row'>
            <div className='column'>
                <h1 className='t1'> {title} </h1>
                <div className='description'> {content} </div>
            </div>
            <div class='video_edit'>
                {video}
            </div>
        </div>
    )
}

export default index
