
import './App.css';

import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
import Alert from './Components/Alert';



function App() {
  const [mode,setmode]=useState("light");
  const [mode2,setmode2]=useState("dark");
  const [a,seta]=useState("Enable");
  const [alert,setalert]=useState(null);

  const showAlert=(Message,type)=>{
    setalert({
      msg: Message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }
  //removes classes from body
  const clearBgcolor=()=>{
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-warning");
  }
  //adds class in body to change background
  const changeBGColor=(type)=>{
    console.log(type);
    clearBgcolor();
    document.body.classList.add("bg-"+type);
  }

  //toggles darkmode
  const toggleMode=()=>{
    
    if(mode===`light`){
      setmode(`dark`);
      setmode2(`light`);
      seta('Disable');
      document.body.style.backgroundColor="#1f3431";
      showAlert("Dark mode Enabled","success");
    }else{
      setmode(`light`);
      setmode2(`dark`);
      seta('Enable');
      document.body.style.backgroundColor="white"
      showAlert("Dark mode Disabled","success");
    }
  }
  return (
    <>
    
      <Navbar title="Text Editor" about="About Text Editor" mode={mode} mode2={mode2} toggleMode={toggleMode} changeBGColor={changeBGColor} a={a}/>
     <Alert alert={alert}/>
      <div className='container my-3'>
        <TextForm Label="Enter Text to be Operated:" mode={mode} showAlert={showAlert}/>
      </div>
    </>
  );
}

export default App;
