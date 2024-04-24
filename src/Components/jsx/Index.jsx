import { useState } from 'react'
import React from 'react'
import './Navbar.css'
import Body from '../body';
export default function Navbar() {
  const [mystyle,setMystyle]=useState({
    color:'black',
    backgroundColor:'grey'
  })
  const [btnText,setbtnText]=useState('Enable dark Mode')
  const handleClick=()=>{
    if(mystyle.color==='white'){
      setMystyle({
        backgroundColor:'grey',
        color:'black'
      })
      setbtnText("Enable dark mode")
    }
    else{
      setMystyle({
        backgroundColor:'black',
        color:'white'
      })
      setbtnText("Enable light mode")
    }
  }

  return (
    <div style={mystyle}>
      <nav>
        <h1>TEXT UTILS</h1>
        <div className="box">
        <button onClick={handleClick} className='btn btn-primary'>{btnText}</button>
        </div>
      </nav>
      <Body/>
      <footer>
        <div className="container text-center ">
         <p className='text-white bg-dark'> Made By Wajid '&#9829;'</p>
        </div>
      </footer>
    </div>
  )
}
