import Button from './Button'

const Header = () => {
    const onClick = () => {
        // window.location.href='https://www.facebook.com/events/481465216886352/';
        window.open('https://www.facebook.com/events/481465216886352/');
        console.log('click')
    }
    
    return (
        <header className='header'>
            {/* <p style={headingStyle}> Register</p>  */}
            <Button text='Register' onClick={onClick} />
        </header>
        
    )
}

const headingStyle = {
    color: 'white', 
    backgroundColor: 'blue'
}

export default Header
