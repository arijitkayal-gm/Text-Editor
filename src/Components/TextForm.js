import React,{useState} from 'react'

export default function TextForm(props) {
    const [text,setText]=useState("")

    const actionOnTextArea=(event)=>{
        console.log("TextArea")
        setText(event.target.value)


    }

  const clickToUpperCase=()=>{
    console.log("Button fired"+text);//check if text is accessable in the function
    let newtext=text.toUpperCase();
    setText(newtext);
    props.showAlert("Text is converted to UpperCase","success");
  } 
  
  const clickToLCase=()=>{
    console.log("Button fired"+text);//check if text is accessable in the function
    let newtext=text.toLowerCase();
    setText(newtext);
    props.showAlert("Text is converted to LowerCase","success");
  }  

  const clickClearCase=()=>{
    let newtext="";
    setText(newtext);
    props.showAlert("TextBox is cleared","success");
  } 
  const clickCCase=()=>{
    let newt = ["",""];
  
    for(let i=0;i<text.length;i++){
      newt[0] = text[0].toUpperCase();
      if(text[i]!==" "){
        newt[i]=text[i].toLowerCase();
      }else{
        newt[i]=text[i];
        i++;
        newt[i]=text[i].toUpperCase();
      }
    }
    let t1=newt.join("");
    console.log(t1);
    setText(t1);
    props.showAlert("Text is converted to Capital Case","success");
  } 

  const clickICase=()=>{
    let newt = ["",""];
  
    for(let i=0;i<text.length;i++){
      newt[0] = text[0].toLowerCase();
      if(text[i]!==" "){
        newt[i]=text[i].toUpperCase();
      }else{
        newt[i]=text[i];
        i++;
        newt[i]=text[i].toLowerCase();
      }
    }
    let t1=newt.join("");
    console.log(t1);
    setText(t1);
    props.showAlert("Text is converted to Inverse Case","success");
  } 

  return (
    <>
    <div className="form-group">
        <label htmlFor="exampleFormControlTextarea1"><h2 style={{color: props.mode==='light'?"grey":"white"}}> Enter text here for operations:</h2></label>
        <div className='mb-3'>
            <textarea className="form-control" value={text} onChange={actionOnTextArea}  id="exampleFormControlTextarea1" rows="10" style={{backgroundColor: props.mode==='dark'?"grey":"white", color: props.mode==='light'?"grey":"white"}}></textarea>
        </div>
        
        <button type="button" className="btn btn-dark mx-2" onClick={clickToUpperCase}>UpperCase</button>
        <button type="button" className="btn btn-dark mx-2" onClick={clickToLCase}>LowerCase</button>
        <button type="button" className="btn btn-dark mx-2" onClick={clickClearCase}>ClearCase</button>

        <button type="button" className="btn btn-dark mx-2" onClick={clickCCase}>CapitalCase</button>
        <button type="button" className="btn btn-dark mx-2" onClick={clickICase}>InverseCase</button>
        
        <div className='container' style={{color: props.mode==='light'?"grey":"white"}}>
          <p>{text.split(" ").filter((e)=>{return e.length!==0}).length} words and {text.length} charecters</p>
          <h2>Preview</h2>
          <p>{text.length>0?text:"Type something to Preview"}</p>
        </div>
    </div>
    </>
    
  )
}
