import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
// import { blogData } from '../Sevices/blogData';
import axios from 'axios';
// import Blogs from '../Sevices/Blogs';
import "../Blog/Blog.css"
// import Navbar from '../Home/Navbar';
import { FaAngleLeft } from "react-icons/fa";

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
    <div className='blog-main'>
        <Link className='go-back' to='/blogs'>

          <FaAngleLeft size='25pt' />
          </Link>
        {blogs.map((blog) => {
          return blog.id === id ? (
            <div  key={blog.id}>
              {/* <h1><span>BLOGER</span></h1> */}
              <h1 className='blog-title'>{blog.title}</h1>
              {/* <h3>Description</h3> */}
              <h3 className='blog-des'>{blog.description}</h3>
              <h6 className='sep-line'>By {blog.writerName}</h6>
              <h6 className='dt-line'>Created {blog.createdDate.slice(0,10)}</h6>
            </div>
          ) : (null)
          // blog.
        })}
              
    </div>
    </>
  )
}

export default Blog
