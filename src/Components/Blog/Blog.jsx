import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
// import { blogData } from '../Sevices/blogData';
import axios from 'axios';
import Blogs from '../Sevices/Blogs';

const Blog = () => {
    
    const [blogs, setBlog] = useState([])

    const {id} = useParams();

    const apiEndpoint = "https://63ad0ea934c46cd7ae8f6df2.mockapi.io/blog/"

    useEffect(() => {
      // let blog=blogData.find(blog => blog.id === parseInt(id));

      const getBlog = async () => {
        const response = await axios.get(apiEndpoint);
        setBlog(response.data);
        console.log(response.data)
      }
      getBlog();
      

      

      // if (blog) {
      //   setBlog(blog)        
      // }
    }, [])
    
  return (
    <>
    <div>
        <Link to='/blogs'>Go Back</Link>
        {blogs.map((blog) => {
          return blog.id === id ? (
            <div key={blog.id}>
              <h1>{blog.title}</h1>
              <h3>{blog.description}</h3>
              <h6>Created {blog.createdDate} By {blog.writerName}</h6>
            </div>
          ) : (<div></div>)
          // blog.
        })}
              
    </div>
    </>
  )
}

export default Blog
