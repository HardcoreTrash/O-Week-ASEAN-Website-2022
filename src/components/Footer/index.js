import React from 'react'
import './Footer.css';
import { GrFacebookOption, GrInstagram, GrLinkedinOption } from "react-icons/gr";

const onClick = (link) => {
    return function() {
        window.open(link);
    } 
}

function index() {
    return (
        <div className='footBar'>
            <img src={`${process.env.PUBLIC_URL}/Images/Footer.png`}/>
            <p> Copyright © UNSW ASEAN Society 2022 - All rights Reserved. </p>
            <div className='footButton'>
                <GrInstagram className='in' onClick={onClick('https://www.instagram.com/aseansoc_unsw/?hl=en')} size={30}/>
                <GrFacebookOption className='fb' onClick={onClick('https://www.facebook.com/ASEANSocUNSW')} size={30}/>
                <GrLinkedinOption className='li' onClick={onClick('https://au.linkedin.com/company/unsw-asean-society')} size={30}/>
            </div>
        </div>
    )
}

export default index
