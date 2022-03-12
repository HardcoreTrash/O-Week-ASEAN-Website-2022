import React from 'react'
import PropTypes from 'prop-types'
import './Profile.css'

function Profile({title, content}) {
    return (
        <div className='back_colour'>
            <h1 className='first_title'> {title} </h1>
            <div className='six_pro'>
                <div className='pro_1'>
                    <p>Danielle </p>
                    <p>Arthur </p>
                    <p>Imandi </p>
                </div>
                <div className='pro_2'>
                    <p>Eric </p>
                    <p>David </p>
                    <p>Lesley </p>
                </div>
            </div>
        </div>
    )
}

export default Profile
