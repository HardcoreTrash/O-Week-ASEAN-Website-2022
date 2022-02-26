import PropTypes from 'prop-types'

const Button = ({text, onClick}) => { 
    return <button onClick={onClick} className='btn' style={buttonStyle}>{text}</button>
}

const buttonStyle = {
    display: 'flex',
    color: 'white', 
    backgroundColor: 'black',
}

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
