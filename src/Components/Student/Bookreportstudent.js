import React from 'react'
import Student from './Student'
import data from "../data"
import "./Student.css"

const Bookreportstudent = () => {
  return (
    <div className='Bookreportstudent'>
    <Student/>
    <div className="cont">
    <h1>Student Book Report</h1>
      <table>
        <thead>
          <tr className='head'>
            <th>Book</th>
            <th>Name</th>
            <th>Issue Date</th>
            <th>Return Date</th>
            <th>Fine</th>
            <th>Return</th>
          </tr>
        </thead>
        <tbody className='body'>
          <tr>
            <th style={{backgroundImage:`url(${data[1].img})`,width:"100px",height:"140px"}}></th>
            <th>{data[1].name}</th>
            <th>30-01-21</th>
            <th>24-02-21</th>
            <th>180</th>
         <th> Return</th>
          </tr>
          <tr>
          <th style={{backgroundImage:`url(${data[10].img})`,width:"100px",height:"140px"}}></th>
            <th>{data[10].name}</th>
            <th>10-03-21</th>
            <th>20-04-21</th>
            <th>0</th>
            <th>Return</th>
          </tr>
          <tr>
          <th style={{backgroundImage:`url(${data[4].img})`,width:"100px",height:"140px"}}></th>
            <th>{data[4].name}</th>
            <th>11-04-21</th>
            <th>13-05-21</th>
            <th>180</th>
            <th>Return</th>
          </tr>
          <tr>
          <th style={{backgroundImage:`url(${data[8].img})`,width:"100px",height:"140px"}}></th>
            <th>{data[8].name}</th>
            <th>01-05-21</th>
            <th>02-06-21</th>
            <th>180</th>
            <th>Return</th>
          </tr>
          <tr>
          <th style={{backgroundImage:`url(${data[6].img})`,width:"100px",height:"140px"}}></th>
            <th>{data[6].name}</th>
            <th>30-07-21</th>
            <th>24-08-21</th>
            <th>0</th>
            <th>Return</th>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  )
}
export default Bookreportstudent