import React from 'react'
import Admin from './Admin'
import data from "../data"
import "./Admin.css"

const Issuebook = () => {
  return (
    <>
        <Admin/>
   
    <div className='Issuebook'>  
    <div className="cont">
    <h1>Issue Book</h1>
      <select name="book" id="book">
        {
          data.map((val)=>{
            return (
              <>
              <option value={val.name}>{val.name}</option>
              </>
            )
          })
        }
        
      </select>
     <input type="text" name="student" placeholder='Student' />
      <input type="number" name="days" id="days" placeholder='Days' />
      <button>submit</button>
      </div>
    </div>
    </>
  )
}

export default Issuebook