import React from 'react'

export default function AnyUserPosts(posts) {

  if (posts) {
    return (
      <div>
        <h2>Mis posts</h2>
        {posts.map(post => {
          return (
            <div className='card col-md-6 p-3' key={posts.indexOf(post)}>
              <div className='card-header'>
                {post.title}
              </div>
              <div className='card-body'>
                <h5>{post.comment}</h5>
                <h6>{post.createdAt}</h6><img className='img-fluid' src={'http://localhost:5000/files/' + post.file[0]} alt='test' />
              </div>
            </div>
          )
        })}
      </div>
    )
  } else {
    return (
      <h1>CARGANDO</h1>
    )
  }
}
