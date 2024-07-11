const newMessage = {
    title: 'New Title',
    message: 'New Message'
}

export const FirsApp = ( {title,subtitle,pasoUnNumero} ) => {

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