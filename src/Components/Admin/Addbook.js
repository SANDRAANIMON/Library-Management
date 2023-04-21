import React from 'react'
import Admin from './Admin'
import "./Admin.css"
 const Addbook = () => {
  return (
    <>
       <Admin/>
   
    <div className='Addbook'>
   
    <div  className='cont'>
    <h1>Add New Book</h1>
    
<input type="text" name="name" id="name" placeholder='Book Name' />
 <input type="text" name="author" id="author" placeholder='Author' />
 <input type="number" name="price" id="price" placeholder='Price'/>
  <input type="number" name="quantity" id="quantity" placeholder='Quantity' />
     <button>Submit</button>
    </div>
</div>
 </>
  )
}
export default Addbook