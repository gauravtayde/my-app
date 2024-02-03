import React, { useState } from 'react'



export default function About(props) {

    const [btnText,setBtnText]=useState("Enable Dark Theme")
    const [MyStyle,SetMyStyle]=useState({
        color:'black',
        backgroundColor:'white'
    })
    const HandleTheme = () => {
      if(MyStyle.color==='white')
      {
        SetMyStyle({
            color:'black',
            backgroundColor:'white'
        })
        setBtnText("Enable Dark Theme")
      }
      else
      {
        SetMyStyle({
            color:'white',
            backgroundColor:'black',
            border:'1 px solid white'
        })
        setBtnText("Enable Light Theme")
      }
       
    }

  return (
    <div className="mainBody mb-3" style={MyStyle}>
        <h1>About Me</h1>
      <div className="accordion my-3" id="accordionExample">
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button className="accordion-button" style={MyStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Accordion Item #1
                </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" style={MyStyle} data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
            </div>
        </div>
        <div className="accordion-item">
        <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={MyStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Accordion Item #2
            </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" style={MyStyle} data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={MyStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Accordion Item #3
            </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" style={MyStyle} data-bs-parent="#accordionExample">
        <div className="accordion-body">
            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
        </div>
  </div>
</div>
<div className="container my-3">
    <button className="btn btn-primary my-2" onClick={HandleTheme} >{btnText}</button>
</div>
    </div>
  )
}
