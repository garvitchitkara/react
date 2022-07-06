import React, { useState } from 'react'

export default function Textarea(props) {
    const handleupclick=()=>{
        // console.log("uppercase was clicked"+ text)
        let newtext=text.toUpperCase();
        setText(newtext);
    }
    const handledownclick=()=>{
        
        let new1text=text.toLowerCase();
        setText(new1text);
    }
    const handleclearclick=()=>{
        
        let new4text=(" ")
        setText(new4text);
    }
    const handlecopyclick=()=>{
        var text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value)
    }
    
        
    //     for (let index = 0; index < array.length; index++) {
    //         const element = array[index];
    //         if(index=" "){
    //             let new5text=text.toUpperCase();
    //             setText(new5text)
    //         }
            
    //     }
    // }
    const handleonchange=(event)=>{
        // console.log("on change")
        setText(event.target.value)
    }


    const[text , setText]=useState("enter the text here")
    return (
        <>
        <div className='container' style={{color:props.mode==="dark"?"white":"#042743"}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                
                <textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor:props.mode==="dark"?"grey":"white",color:props.mode==="dark"?"white":"#042743"}} id="mybox" rows="3"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleupclick}>convert to uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handledownclick}>convert to lowercase</button>
            <button className="btn btn-primary" onClick={handlecopyclick}>copy</button>
            {/* <button className="btn btn-primary" onClick={handlecapitalclick}>convert to capitalize</button> */}
            <button className="btn btn-danger mx-2" onClick={handleclearclick}>reset</button>
            


        </div>
        <div className="container" my-3 style={{color:props.mode==="dark"?"white":"#042743"}}>
            <h1>your text summary</h1>
            <p>{text.split(" ").length} words and {text.length}character</p>
            <p>{0.08 * text.split(" ").length}</p>
            <h3>preview</h3>
            <p> {text.length>0?text:"enter somrthing write above for preview here" } </p>
        </div>
        </>
    )
}
