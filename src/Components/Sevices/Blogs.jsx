import React from 'react'
import BlogItem from '../BlogItem/BlogItem'
import Navbar from '../Home/Navbar'


const Blogs = ({blogs}) => {
  return (
    <div>
      <Navbar />
      <h1>Blogs</h1>
      <div>
      {blogs.map((blog) => (
      <BlogItem blog={blog} key={blog.id} />
      ))}
      
    </div>
      </div>
      
  )
}

export default Blogs
