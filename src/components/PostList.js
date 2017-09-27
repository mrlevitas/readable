import React from 'react'


export default function PostList ({ posts = [] }) {
  return (
    <ul className='post-list'>
      {posts.map((item) => (
        <li key={item.id}>
          <h3>{item.title}</h3>
          <div>{item.body}</div>
        </li>
      ))}
    </ul>
  )
}
