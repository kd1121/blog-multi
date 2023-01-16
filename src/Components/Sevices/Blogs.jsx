import React from 'react'
import BlogItem from '../BlogItem/BlogItem'
import Navbar from '../Home/Navbar'
import { useEffect, useState } from 'react'
import "../Sevices/Blogs.css"
// import { useParams } from 'react-router-dom'
import axios
 from 'axios'
import Footer from '../Footer/Footer'


const Blogs = () => {

  const [blogs, setBlog] = useState([]);
  // const {id} = useParams();


  // const [showPosts, setShwoPosts] = useState([]);

  const apiEndPoint = "https://63ad0ea934c46cd7ae8f6df2.mockapi.io/blog/";

  useEffect(() => {
    const getBlog = async () => {
      const response = await axios.get(apiEndPoint);
      setBlog(response.data);
      // console.log(response.data);
    };
    getBlog();

  });


  return (
    <div >
      <Navbar />
      <h1 className='hdr-blog'>Blogs</h1>
      <div className='blog-list'>
      {blogs.map((blog) => (
      <BlogItem blog={blog} key={blog.id} />
      ))}
      
    </div>
    <Footer />
    </div>
    
      
  )
}

export default Blogs
