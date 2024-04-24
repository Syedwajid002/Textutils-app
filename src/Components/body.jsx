import React, { useState} from 'react'

export default function Body(){
  const [text,setText]=useState('')
  const handleonchange=(e)=>{
    setText(e.target.value);
    setPreview(e.target.value)
  }
  const handleUpClick=()=>{
    let newtext=text.toUpperCase();
      setText(newtext)
  }
   const handlelowclick=()=>{
   let newtext=text.toLowerCase();
      setText(newtext)
  }
  const handleclear=()=>{
       setText("")
   }
   const handleSpacesclick=()=>{
    let newtext=text.replace(/\s+/g, ' ').trim();
    setText(newtext)
   }
   const [preview,setPreview]=useState('')
    const handleCopyClick = () => {
      navigator.clipboard.writeText(text);
    };
  return (
    <div>
      <div className="container d-flex">
        <div className="first">
        <h2 className='text-center'>Enter the Text To Perform Operations</h2>
        <textarea name="" id="" cols="100" rows="18" value={text} onChange={handleonchange}></textarea>
        <br />
        </div>
        <div className="btns">
        <button className="btn btn-dark m-5 d-block" onClick={handleUpClick}>Convert To UpperCase</button>
        <button className="btn btn-dark m-5 d-block" onClick={handlelowclick}>Convert To LowerCase</button>
        <button className="btn btn-dark m-5 d-block" onClick={handleSpacesclick}>Remove extra spaces</button>
        <button className="btn btn-dark m-5 d-block" onClick={handleCopyClick}>Copy All Text</button>
        <button className="btn btn-dark m-5 d-block " onClick={handleclear}>Clear All Text</button>
        </div>
      </div>
      <div className="container">
        <h1>Your text Summary</h1>
        <p>Your Text has {text.split(' ').length} words and {text.length} characters</p>
        <p>{0.08*(text.split(' ').length)} Minutes Read</p>
        <h2>Preview</h2>
        <p>{preview}</p>
      </div>
    </div>
  )
}
