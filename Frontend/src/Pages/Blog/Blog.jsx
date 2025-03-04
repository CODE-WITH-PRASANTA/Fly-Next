import React from 'react'
import './Blog.css'
import BlogSection from '../../Components/BlogSection/BlogSection'

const Blog = () => {
  return (
    <>
    <div>
    <div className="Blog-container">
      <div className="Blog-header">
        <h1>Blog</h1>
        <p>Home &gt; <span>Blog</span></p>
      </div>
    </div>
    </div>
<BlogSection />
    </>
  )
}

export default Blog