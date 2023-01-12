import React from 'react'
import { Link } from 'react-router-dom'

const BlogItem = ({blog:{id,title,description,createdDate,writerName}}) => {
  return (
    <>
    <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{writerName}</p>
        <div>
            <Link to={`/blogs/${id}`}>Goto</Link>
        </div>
    </div>
    </>
  )
}

export default BlogItem
