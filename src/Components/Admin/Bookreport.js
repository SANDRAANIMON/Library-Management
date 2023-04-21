import React from 'react'
import Admin from './Admin'
import data from "../data"
import "./Admin.css"

 const Bookreport = () => {
  return (
    <> <Admin/>
    <div className='Bookreport'>
   
    <h1>Book Report</h1>
    <div className="cont">
    {
      data.map((val)=>{
        return(
        <>
        <div className="main">
        <p><div style={{backgroundImage:`url(${val.img})`,width:"100px",height:"140px"}}></div></p>
        
        <p style={{color:"rgb(255, 81, 110)"}}>{val.name}</p>
        <p>Author : &nbsp; 
        <i> {val.author}</i></p>
        <p style={{color:"gray"}}>Rs. {val.price}</p>
        
        </div>
        </>
        )
      })
    }
      </div>
    </div>
    </>
  )
}
export default Bookreport