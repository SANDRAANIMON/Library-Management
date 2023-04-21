import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Student.css"

const Student = () => {
  return (
    <div className='Student'>
        <ul>
       <NavLink to={"/student/requestbook"} className={"nav"}><li>Request Book</li></NavLink>
       <NavLink to={"/student/bookreportstudent"} className={"nav"}><li>Book Report Student</li></NavLink>      
       <NavLink to={"/"}><button>Logout</button> </NavLink>
      </ul>
    </div>
  )
}

export default Student
