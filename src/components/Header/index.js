import Button from './Button'
import Title from './BackgroundImage/Title.jpg'
import { GrFacebookOption, GrInstagram, GrLinkedinOption } from "react-icons/gr";
import './Header.css';
import Logo from './BackgroundImage/asean_logo.png';

const styles = {
    backgroundImage: `url(${Title})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh',
};

    // window.open('https://www.facebook.com/events/481465216886352/');
const onClick = (link) => {
    return function() {
        window.open(link);
    } 
}

const Header = () => {
    return (
        <header className='header'>

            <div className='hbar'>
                <div className='bigContainer'>
                    <img src={Logo} className='logo'></img>
                    <div className='container'>
                        <GrInstagram className='in' onClick={onClick('https://www.instagram.com/aseansoc_unsw/?hl=en')} size={30}/>
                        <GrFacebookOption className='fb' onClick={onClick('https://www.facebook.com/ASEANSocUNSW')} size={30}/>
                        <GrLinkedinOption className='li' onClick={onClick('https://au.linkedin.com/company/unsw-asean-society')} size={30}/>
                        <Button text='Register' onClick={onClick('https://www.facebook.com/events/481465216886352/')} />
                    </div>
                </div>
            </div>

            <div className="BackgroundStyle" style={styles}></div>

        </header>
    )
}

export default Header
