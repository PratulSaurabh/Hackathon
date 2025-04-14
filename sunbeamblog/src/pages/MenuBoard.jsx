import React from 'react'
import './menuboard.css'
import { Link } from 'react-router-dom'
function MenuBoard() {
  return (
    <div>
      <h1 className='page-header'>Blogging App</h1>
      <div className="container">
        <div className="blogContainer">
            <div className="contents">
                <div className='blog-title'>
                    <Link to='/container/all-blog'>
                    All Blogs
                    </Link>
                </div>
                <div className='blog-title'>
                <Link to='/container/my-blog'>
                    My Blogs
                    </Link>
                </div>
                <div className='blog-title'>
                    Add Category
                </div>
                <div className="blog-title">
                    Show Categories
                </div>
                <div className="blog-title">
                    Add Blog
                </div>
                <div className="blog-title">
                    Search Blogs
                </div>
                <div className="blog-title">
                    Logout
                </div>
            </div>
            <div className="content-box">contentbox</div>
        </div>
      </div>
    </div>
  )
}

export default MenuBoard
