import React from 'react'
import {NavLink} from 'react-router-dom'
import "./Login.css"


const Login = () => {
  return (
    <>
    
    <div className='login'>    

      <div className="student">
        <h1>Student Login</h1>
        <input type="email" name="email" id="email" placeholder='Your Email'/>
        <input type="password" name="password" id="password" placeholder='Your Password'/>
        <NavLink to={"/student/requestbook"}><button>Login</button></NavLink> 
        <p>Forgot password?</p>
      </div>
      <div className="admin">
      <h1>Admin Login</h1>
        <input type="email" name="email" id="email" placeholder='Your Email' />
        <input type="password" name="password" id="password" placeholder='Your Password' />
        <NavLink to={"/admin/addbook"}><button>Login</button></NavLink>
        <p>Forgot password?</p>
      </div>

    </div>
    </>
  )
}

export default Login
