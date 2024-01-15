import React, { useState } from 'react'
import { DummyPosts } from '../data/data'
import PostItem from '../components/PostItem';

const AuthorPosts = () => {
  const [posts, setPosts] = useState(DummyPosts);

  return (
    <section className="authorPosts">
      <h1 className='page-title'>Author Posts</h1>
      {posts.length > 0 ? <div className="container authorPosts-container">
        {
          posts.length > 0 &&
          posts.map(({ Image, authorId, category, title, des, id }, index) => (
            <PostItem
              key={index}
              Image={Image}
              category={category}
              authorId={authorId}
              title={title}
              des={des}
              postId={id}
            />
          ))}
      </div> : <h2 className="error-center">No posts found</h2>
      }

    </section >
  )
}

export default AuthorPosts