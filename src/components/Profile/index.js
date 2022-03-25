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
                {/* <img src={`${process.env.PUBLIC_URL}/Profile/Dani.png`} className='profile_pic'/>
                <img src={`${process.env.PUBLIC_URL}/Profile/Arthur.png`} className='profile_pic'/>
                <img src={`${process.env.PUBLIC_URL}/Profile/Imandi.png`} className='profile_pic'/> */}

                <ProfileBox pic={`${process.env.PUBLIC_URL}/Profile/Dani.png`} title='Danielle' />
                <ProfileBox pic={`${process.env.PUBLIC_URL}/Profile/Arthur.png`} title='Danielle' />
                <ProfileBox pic={`${process.env.PUBLIC_URL}/Profile/Imandi.png`} title='Danielle' />

            </div>

            <div className='pro_2'>
                {/* <img src={`${process.env.PUBLIC_URL}/Profile/Eric.png`} className='profile_pic'/>
                <img src={`${process.env.PUBLIC_URL}/Profile/David_S.png`} className='profile_pic'/>
                <img src={`${process.env.PUBLIC_URL}/Profile/Lesley.png`} className='profile_pic'/> */}

                <ProfileBox pic={`${process.env.PUBLIC_URL}/Profile/Eric.png`} title='Danielle' />
                <ProfileBox pic={`${process.env.PUBLIC_URL}/Profile/David_S.png`} title='Danielle' />
                <ProfileBox pic={`${process.env.PUBLIC_URL}/Profile/Lesley.png`} title='Danielle' />

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
