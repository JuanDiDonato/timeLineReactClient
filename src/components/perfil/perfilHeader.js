import React from 'react'

export default function PerfilHeader(user,friends) {
    return (
        <div className='border-bottom mx-auto col-md-12 text-center p-5'>
            <img src={user.photo} alt={user.username} />
            <h3>{user.description}</h3>
            <h6>{friends.length}</h6>
        </div>
    )
}
