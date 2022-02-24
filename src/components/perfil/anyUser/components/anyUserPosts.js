import React from 'react'
import moment from 'moment'
import 'moment/locale/es'

export default function AnyUserPosts(posts) {

  if (posts && posts.length > 0) {
    return (
      <div className='time-line'>
        {posts.map(post => {
          return (
            <div className='post' key={posts.indexOf(post)}>
              <div className='title'>
                {post.title}
              </div>
              <div>
                <img src={'http://localhost:5000/files/' + post.file[0]} alt='test' />
              </div>
              <div className='comment'>
                <h6>{moment(post.createdAt).fromNow()}</h6>
                <h4>{post.comment}</h4>
              </div>
            </div>
          )
        })}
      </div>
    )
  } else {
    return (
      <div className='message'>
        <h3>El usuario no tiene ninguna publicacion</h3>
      </div>
    )
  }
}
