import React from 'react'
import any_user_functions from '../functions';

const AnyUserFollow = (username, isFriend, setIsFriend) => {
  console.log(username)
  const followButton = () => {
    if (!isFriend) {
      any_user_functions.Follow(username)
      setIsFriend(true)
    } else {
      any_user_functions.UnFollow(username)
      setIsFriend(false)
    }
  }

  return (
    <div className='follow'>
      {!isFriend ?
        <button className='btn' onClick={() => followButton()}>Seguir</button>
        :
        <button className='btn' onClick={() => followButton()}>Dejar de seguir</button>
      }
    </div>
  )
}

export default AnyUserFollow