import React from 'react'
import './allBlog.css'

function MyBlogs() {
  return (
    <div>
      <h1 className='page-header'>My Blogs</h1>
      <div className="container">
        <div className="leftbox">

        </div>
        <div className="rightbox">
            <div className="table-container">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody id='tbody'>
                        <tr>
                            <td>1</td>
                            <td>title</td>
                            <td>cat</td>
                            <td>
                                <button>edit</button>
                                <button>delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
      </div>
    </div>
  )
}

export default MyBlogs
