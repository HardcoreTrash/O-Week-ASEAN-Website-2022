import React from 'react'
import PropTypes from 'prop-types'
import './Profile.css'

const ProfileBox = ({pic, title}) => { 
    return <div className='profile_info'>
        <img src={pic} className='profile_pic'/>
        <p className='nameStyle'> {title} </p>
    </div>
}

function Profile({title}) {
    return (
        <div className='back_colour'>
            <h1 className='first_title'> {title} </h1>

            <div className='pro_1'>
                <ProfileBox pic={`${process.env.PUBLIC_URL}/Profile/Dani.png`} title='DANIELLE (PRESIDENT)' />
                <ProfileBox pic={`${process.env.PUBLIC_URL}/Profile/Arthur.png`} title='ARTHUR (VP INTERNAL)' />
                <ProfileBox pic={`${process.env.PUBLIC_URL}/Profile/Imandi.png`} title='IMADNDI (VPEXTERNAL)' />

            </div>

            <div className='pro_2'>
                <ProfileBox pic={`${process.env.PUBLIC_URL}/Profile/Eric.png`} title='ERIC (SECRETARY)' />
                <ProfileBox pic={`${process.env.PUBLIC_URL}/Profile/David_S.png`} title='DAVID (TREASURER)' />
                <ProfileBox pic={`${process.env.PUBLIC_URL}/Profile/Lesley.png`} title='LESLEY (ARC DELEGATE)' />
            </div>

{/* <p>Danielle </p>
                    <p>Arthur </p>
                    <p>Imandi </p>
                    <p>Eric </p>
                    <p>David </p>
                    <p>Lesley </p> */}
        </div>
    )
}

export default Profile
