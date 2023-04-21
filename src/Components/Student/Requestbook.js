import React, { useEffect, useState } from "react";
import Student from './Student'
import data from "../data"
import Loading from "../Loading/Loading"
import "./Student.css"

const Requestbook = () => {
 
 
  const [loading, setLoading] = useState(true);
  const [len,setLen]=useState(9);
  const [inp,setInp]=useState("");
  const [d,setD]=useState(data);
  useEffect(() => {    
    setLoading(false)
  }, [len]);

  const handelInfiniteScroll = async () => {
    
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setLoading(true);
        setLen((prev)=>prev+7);  
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  function change(e){
    setD(data);
    setInp(e.target.value);
  }
  function search(){
   const arr= data.filter((val)=>{
     let k=inp.toLowerCase();  
     let n=val.name.toLowerCase();
     let a=val.author.toLowerCase();
     let s=val.subject.toLowerCase();
    
      if(n.includes(k) ||a.match(k)||val.published==parseInt(k)||s.match(k)){
      // console.log(val)
      return val;
   }
    })
    setD(arr);
    // setInp("");
  
  }
  useEffect(() => {
    window.addEventListener("scroll", handelInfiniteScroll);
    return () => window.removeEventListener("scroll", handelInfiniteScroll);
  }, []);

  return (
    <>
      <Student/>
    
    <div className="Requestbook">
    
    <h1>Request Book</h1>
    <input type="text" placeholder="Search by Title or Author or Subject or Published Year..." value={inp} onChange={(e)=>change(e)}/>
    <button onClick={search}>Search</button>
    {inp===""? <p style={{color:"rgb(61, 56, 56)",fontSize:"15px"}}>Books Available: {data.length}</p>
    :<p style={{color:"rgb(61, 56, 56)",fontSize:"15px"}}>Books Available: {d.length}</p>}
    <div className="cont">
    
    {
      
      inp===""?
      data.map((val,idx)=>{
        if(idx<len){
        return(
          <div className="main">
        
        <p><div style={{backgroundImage:`url(${val.img})`,width:"100px",height:"140px"}}></div></p>
        
        <p style={{color:"rgb(255, 81, 110)"}}>{val.name}</p>
        <p>Author : &nbsp; 
        <i> {val.author}</i></p>
        <p style={{color:"gray"}}>{val.subject}</p>
        <p>Published: <i>{val.published}</i></p>
        <p><button>Request Book</button></p>
        </div>
        )
        }
     
      }):  d.map((val,idx)=>{
        if(idx<len){
        return(
          <div className="main">
        
        <p><div style={{backgroundImage:`url(${val.img})`,width:"100px",height:"140px"}}></div></p>
        
        <p style={{color:"rgb(255, 81, 110)"}}>{val.name}</p>
        <p>Author : &nbsp; 
        <i> {val.author}</i></p>
        <p style={{color:"gray"}}>{val.subject}</p>
        <p>Published: <i>{val.published}</i></p>
        <p><button>Request Book</button></p>
        </div>
        )
        }
     
      })
    }
    {loading && <Loading/>}
    {len>=35?<button onClick={()=>{
      setLen(9); window.scrollTo(0,0)
      }}>Back to Top</button>:""}
    </div>
    </div>
    </>
  );
};

export default Requestbook;
