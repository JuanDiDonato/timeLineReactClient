import React from 'react'

export default function PerfilHeader(user,friends) {
    return (
        <div className='header'>
            <img src={'http://localhost:5000/files/' + user.photo} alt={user.username} />
            <h3>{user.username}</h3>
            <h4>{user.description}</h4>
            <h5>{friends.length}</h5>
        </div>
    )
}
