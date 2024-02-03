import React, { useState } from 'react';


export default function TextForm(props) {

  const handleOnChange = (event)=>{
    setBoxText(event.target.value);
  }
  const handleUpclick = ()=>{
    let newText = boxText.toUpperCase();
    setBoxText(newText);
  }
  const handleLoclick = ()=>{
    let newText = boxText.toLowerCase();
    setBoxText(newText);
  }
  const handleclearclick = ()=>{
    let newText = "";
    setBoxText(newText);
  }

  const [boxText,setBoxText]=useState("Enter text here")

  return (
    <>
    <div >
      <div className="mb-3" style={{color: props.mode==='light'?'black':'white' }} >
        <h4 htmlFor="exampleFormControlInput1" className="form-h4">{props.firstHeading}</h4>
        <textarea type="freeText" style=
        {{backgroundColor: props.mode==='light'?'white':'grey',
        color: props.mode==='light'?'black':'white' 
      
      }} className="form-control" onChange={handleOnChange} onClick={handleclearclick} value={boxText}/>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpclick}>Convert to Upper</button>
      <button className="btn btn-primary mx-2" onClick={handleLoclick}>Convert to Lower</button>
      <button className="btn btn-primary mx-2" onClick={handleclearclick}>Reset</button>
    </div>
    <div className="conatiner my-3" style={{color: props.mode==='light'?'black':'white' }}>
      <h4 >Input text Summary</h4>
      <p>{boxText.length} charaters and {boxText.split(" ").length} words</p>
      <p>{0.008 * boxText.split(" ").length} minutes to read the text</p>
      <p >{boxText.length>0 ? boxText : "Please write something above to preview here"}</p>
    </div>
    </>
  )
}
