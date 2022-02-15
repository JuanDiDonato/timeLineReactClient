import React from 'react'

export default function AnyUserPosts(posts) {

if(posts){
    return (
        <div>
            <h2>Mis posts</h2>
              {posts.map(post => {
                return(
                  <div key={posts.indexOf(post)}>
                    <h1>{post.title}</h1>
                    <h3>{post.comment}</h3>
                    <h6>{post.createdAt}</h6>
                  </div>
                )
              })}
        </div>
      )
}else{
    return(
        <h1>CARGANDO</h1>
    )}
}
