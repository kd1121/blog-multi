import React from 'react'
import { Link } from 'react-router-dom'
import  "../res/right-arrow.png"
import "../BlogItem/BlogItem.css"
import { FaAngleRight } from "react-icons/fa";


const BlogItem = ({blog:{id,title,description,createdDate,writerName}}) => {
  return (
    <>
    <div className='item-main'>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{writerName}</p>
        <div className='arrow-svg'>
            <Link to={`/blogs/${id}`}><FaAngleRight className='arrow-icn' /></Link>
        </div>
    </div>
    </>
  )
}

export default BlogItem
