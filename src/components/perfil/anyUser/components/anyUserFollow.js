import React from 'react'
// metodos
import any_user_functions from '../functions';

const AnyUserFollow = (username, isFriend, setIsFriend) => {

    const followButton = () => {
    if(!isFriend){
      any_user_functions.Follow(username)
      setIsFriend(true)
    }else{
      any_user_functions.UnFollow(username)
      setIsFriend(false)
    }}

  return (
    <div className='container mx-auto text-center'>
        {!isFriend ?
        <button className='btn btn-primary' onClick={() => followButton()}>Seguir</button>
        :
        <button className='btn btn-outline-danger' onClick={() => followButton()}>Dejar de seguir</button>
        }
    </div>
  )
}

export default AnyUserFollow