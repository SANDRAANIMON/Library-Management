import React from 'react'
import {NavLink} from "react-router-dom"
import "./Admin.css"
const Admin = () => {
  return (
    <div className='Admin'>
      <ul>
       <NavLink to={"/admin/addbook"} className={"nav"}><li>Add Book</li></NavLink>
       <NavLink to={"/admin/bookreport"} className={"nav"}><li>Book Report</li></NavLink>      
       <NavLink to={"/admin/issuebook"} className={"nav"}> <li>Issue Book</li></NavLink>
       <NavLink to={"/admin/issuebookrecord"} className={"nav"}><li>Issue Book Record</li></NavLink>
       <NavLink to={"/"}> <button>Logout</button></NavLink>
      </ul>
    </div>
  )
}

export default Admin
