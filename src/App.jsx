import React from 'react'
// import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home'
import AboutUs from "./Components/AboutUs/AboutUs"
// import Blogs from './Components/Sevices/Blogs';
import Blog from './Components/Blog/Blog';
// import { blogData } from './Components/Sevices/blogData';
import Blogs from './Components/Sevices/Blogs';


const App = () => {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path='/'  element={<Home />} />
        <Route path="/blogs" index element={<Blogs  />} />
        <Route path='/blogs/:id' element={<Blog />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App





