import React from 'react'
import './createblog.css'
function CreateBlog() {
    return (
        <div>
            <h1 className='page-header'>Create Blog</h1>
            <div className="container">
                <div className="leftbox">

                </div>
                <div className="rightbox">
                    <div className="mb-3 row ">
                        <label className="col-sm-2 col-form-label">Title</label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="">Contents:</label>
                        <div className="form-floating ms-3 me-3">
                            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: 100 }}></textarea>
                            <label htmlFor="floatingTextarea2">Comments</label>
                        </div>
                    </div>
                    <select className="form-select ms-3" aria-label="Default select example" style={{ width: 450 }} >
                        {/* <option selected>Open this select menu</option> */}
                        <option value={{}} >Movie</option>
                        <option defaultValue="2">Two</option>
                        <option defaultValue="3">Three</option>
                    </select>
                    <div className="mb-3">
                        <button className="btn btn-success me-3">Create</button>
                        <button className="btn btn-danger">Cancel</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CreateBlog
