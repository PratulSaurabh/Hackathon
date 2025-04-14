import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { registerUser } from '../services/user'

function Register() {
  const [info, setInfo] = useState({
    fullName: '',
    email: '',
    password:'',
    phone_no:''
  })
  const onRegister = async () => {
  if (info.fullName.length == 0) {
        toast.warn('Please enter full name')
      } else if (info.email.length == 0) {
        toast.warn('Please enter email')
      } else if (info.password.length == 0) {
        toast.warn('Please enter password')
      } else if (info.phone_no.length == 0) {
        toast.warn('Please enter phone')
      }else{
        console.log('name: ' + info.fullName)
        console.log('email: ' + info.email)
        console.log('phone: ' + info.phone_no)
        console.log('pass: ' + info.password)
        const { fullName, email, password, phone_no } = info
              const result = await registerUser(
                fullName,
                email,
                password,
                phone_no
              )
              if (result['status'] == 'success') {
                toast.success('Successfully registered a user')
        
                // navigate to the login screen
                navigate('/')
              }
      }
    }
  return (
    <div>
      <h1 className="page-header">Register</h1>
      <div className='row'>
      <div className='col'></div>
      <div className='col'>
      <div className="container">
        <div className="mb-3">
          <label htmlFor="">Full Name</label>
          <input 
            onChange={(e)=> setInfo({...info, fullName:e.target.value})}
          type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="">Email</label>
          <input 
            onChange={(e)=> setInfo({...info, email:e.target.value})}
          type="email" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="">Password</label>
          <input 
          onChange={(e)=> setInfo({...info, password:e.target.value})}
          type="password" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="">Phone Number</label>
          <input
            onChange={(e)=> setInfo({...info, phone_no:e.target.value})}
          type="tel" className="form-control" />
        </div>
        <div className="mb-3"></div>
        <div className="mb-3">
          Already have an account? Login <Link to='/'>here</Link>
        </div>
        <button 
          onClick={onRegister}
        className="btn btn-success">
          Register
        </button>
      </div>
      </div>
      <div className='col'></div>
      </div>
    </div>
  )
}

export default Register
