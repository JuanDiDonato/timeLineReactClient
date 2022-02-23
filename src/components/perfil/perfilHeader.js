import React from 'react'
import { useParams } from 'react-router-dom';
import AnyUserFollow from './anyUser/components/anyUserFollow'

export default function PerfilHeader(user, friends, loguedUsername, isFriend, setIsFriend, setFriends) {
    const { username } = useParams()
    return (
        <div className='header'>
            <div className='header-image'>
                <img src={'http://localhost:5000/files/' + user.photo} alt={user.username} />
            </div>
            <div className='header-info'>
                <h3>{user.username}</h3>
                <h4>{user.description}</h4>
                <h5>{friends.length}</h5>
                {user.username !== loguedUsername ?
                    AnyUserFollow(username, isFriend, setIsFriend)
                    : null}
            </div>
        </div>
    )
}
