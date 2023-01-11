import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { blogData } from '../Sevices/blogData';

const Blog = () => {
    const {id} = useParams();
    const [blog, setBlog] = useState(null)

    useEffect(() => {
      let blog=blogData.find(blog => blog.id === parseInt(id));

      if (blog) {
        setBlog(blog)        
      }
    }, [])
    
  return (
    <>
    <div>
        <Link to='/blogs'>Go Back</Link>
        
            {
                blog ?
                <div>
                    <header>
                        <h1>{blog.title}</h1>
                    </header>
                </div>: null
            }
              
    </div>
    </>
  )
}

export default Blog
