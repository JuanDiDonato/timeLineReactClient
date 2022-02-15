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
    <div>
        {!isFriend ?
        <button onClick={() => followButton()}>Seguir</button>
        :
        <button onClick={() => followButton()}>Dejar de seguir</button>
        }
    </div>
  )
}

export default AnyUserFollow