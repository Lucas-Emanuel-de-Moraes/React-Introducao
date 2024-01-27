import React from 'react'
import PostCard from '../PostCard'
import './styles.css'

const Posts = ({ posts }) => {
  return (
    <div className='posts'>
      {posts.map(post => (
        <PostCard post={post} key={post.id} />
      ))}
    </div>
  )
}

export default Posts