import React from 'react'
import { Link } from 'react-router-dom'

const BlogItem = ({blog:{id,title,description}}) => {
  return (
    <>
    <div>
        <h3>Blog no.{id}</h3>
        <div>
            <Link to={`/blogs/${id}`}>Goto</Link>
        </div>
    </div>
    </>
  )
}

export default BlogItem
