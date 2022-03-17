import React from 'react'
import PropTypes from 'prop-types'
import join_us from './Joinus.jpg'
import './Recruitment.css'
import Button from '../Header/Button'

const onClick = (link) => {
    return function() {
        window.open(link);
    } 
}

function Recruitment({title}) {
    return (
        <div className='recruit' style={{backgroundImage: `url(${join_us})`}}>
            <h1 className='second_title' style={{marginTop: '60px'}}> {title} </h1>
            <div className='buttonStyle'>
                <Button text='Associate Form' onClick={onClick('https://docs.google.com/forms/d/e/1FAIpQLSdxKjZ_lw-V1rKLEeoPTkA12sayWCaqIeqJyALKoyNyQElTEQ/viewform')} />
                <Button text='Membership Form' onClick={onClick('https://docs.google.com/forms/d/e/1FAIpQLSeUvlV2fPXakLkz19-8B1zX3nHAEMIRQD-Uq4abLIo1txWahQ/viewform')} />
                <Button text='Director Form' onClick={onClick('https://docs.google.com/forms/d/e/1FAIpQLSeq2P38iQoIrxixIZJh9C0YIwyCDfwQlfj2fjry34EUIe1ReA/viewform')} />
            </div>
        </div>
    )
}

export default Recruitment
