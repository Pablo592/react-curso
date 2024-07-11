import PropTypes from 'prop-types'

const newMessage = {
    title: 'New Title',
    message: 'New Message'
}

export const FirsApp = ( {
    title = 'Default Title',
    subtitle = 'Default Subtitle',
    pasoUnNumero = 0
} ) => {

   // console.log(props);

    return (
    <>
        <br />
        <p>{title}, {subtitle}</p>
        <p>{pasoUnNumero}</p>
        <code>{ JSON.stringify(newMessage) }</code>
        <p>My first React App</p>
    </>
      
    )
}
FirsApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    pasoUnNumero: PropTypes.number.isRequired
}


