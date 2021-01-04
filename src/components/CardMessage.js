import React from 'react'

const CardMessage = ({message}) => {
    return (
        <li style={{ background: 'red', color: 'white', padding: '5px 10px', fontSize: '1.25rem' }}>
            {message}
        </li>
    )
}

export default CardMessage
