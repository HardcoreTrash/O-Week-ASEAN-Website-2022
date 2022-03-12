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
            <div>
                {video}
            </div>

            {/* style={{ backgroundImage: `url(${backImage})`, backgroundRepeat: 'no-repeat', height: '100vh', width: '100vw'} */}
                {/* <div style={{ backgroundImage: `url(${backImage})`, backgroundRepeat: 'no-repeat', height: '100vh', width: '100vw'}}/> */}

        </div>
    )
}

export default index
