import React, { createContext, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Container from './pages/Container'
import Homepage from './pages/Homepage'
import MenuBoard from './pages/MenuBoard'
import ViewBlogDetails from './pages/ViewBlogDetails'
import SearchBlog from './pages/SearchBlog'
import CreateBlog from './pages/CreateBlog'
import EditBlog from './pages/EditBlog'
import AllBlogs from './pages/AllBlogs'
import MyBlogs from './pages/MyBlogs'


//context for auth info
export const AuthContext = createContext()


function App() {
  //maintain the user for context
  const [user, setUser] = useState(null)
  
  return (
    <div>
      <AuthContext.Provider value={{user, setUser}}>
        <Routes>
       
          {/* <Route
            path='/'
            element={<Homepage/>}
          /> */}
          <Route
            path='/'
            element={<Login/>}
            />
          <Route
            path='register'
            element={<Register/>}
          />
           <Route
            path='/container'
            element={ <Container/> }
          >
            <Route
          path='all-blog'
          element={<AllBlogs/>}
          />
          <Route
          path='my-blog'
          element={<MyBlogs/>}
          />
          <Route
          path='menu-board'
          element={<MenuBoard/>}
          />
          <Route
          path='view=blog-details'
          element={<ViewBlogDetails/>}
          />
          <Route
          path='search-blog'
          element={<SearchBlog/>}
          />
          <Route
          path='create-blog'
          element={<CreateBlog/>}
          />
          <Route
          path='edit-blog'
          element={<EditBlog/>}
          /><Route
          path='menu-board'
          element={<MenuBoard/>}
          />
        </Route> 
        </Routes>
      </AuthContext.Provider>
    </div>
  )
}

export default App
