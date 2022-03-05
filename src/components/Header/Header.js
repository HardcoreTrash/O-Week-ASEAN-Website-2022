import Button from './Button'

const Header = () => {
    const onClick = () => {
        window.open('https://www.facebook.com/events/481465216886352/');
    }
    
    return (
        <header className='header'>
            <Button text='Register' onClick={onClick} />
        </header>
        
    )
}

const headingStyle = {
    color: 'white', 
    backgroundColor: 'blue'
}

export default Header
