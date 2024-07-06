import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to UpperCase!" , "success")
    }
    const handleLwClick = ()=>{
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to LowerCase!" , "success")

    }
    const handleClearClick = ()=>{
        let newtext = "";
        setText(newtext);
        props.showAlert("Text box cleared successfully" , "success")
    }
    const handleCopy = ()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied" , "success")
        
    }
    const handleExtraSpace =()=>{
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "))
        props.showAlert("ExtraSpaces have been removed" , "success")

    }
    const handleOnchange = (event)=>{
        setText(event.target.value)
    }
    const [text, setText] = useState("");
  return (
    <>
    <div className='container 'style={{color:props.mode === 'dark'?'white':'#042743'}}>
        <h1> {props.heading}</h1>
        <div className='mb-3'>
            <textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor:props.mode === 'dark'?'gray':'white' , color:props.mode === 'dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}  >Convert to UpperCase</button>
        <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleLwClick} >Convert to lowerCase</button>
        <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick} >Clear</button>
        <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleCopy} >Copy Text</button>
        <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpace} >Remove extra space</button>
    </div>
    <div className="container my-3" style={{color:props.mode === 'dark'?'white':'#042743'}}>
        <h1>Your text summary </h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} character</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something in the textBox"}</p>
    </div>
    </>
  )
}
