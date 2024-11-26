// import logo from './logo.svg';
// import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, {useState } from 'react';
// import{
//   BrowserRouter as Router,
//   Switch,
//   Routes,
//   Route,
//   Link
// }from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1800);


  } 

  const toggleMode = () => {                                         
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#364055';
      document.body.style.color = "white"
      showAlert("Dark mode has been enabled", "success");
    }                                                         
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = "black"
      showAlert("Light mode has been enabled", "success");
    }
  }


  return (
    <> 
   <Navbar title = "TextConvrter" aboutText = "About TextConvrter " mode={mode} toggleMode = {toggleMode}/>
   <Alert alert = {alert}/>
   <div className="container my-3">
     <TextForm showAlert= {showAlert} heading="Enter your text here" mode = {mode} />
     </div>
    </>
  );
}
      // <Router>
   {/* <Routes> */}
    {/* <Route path="/about" element = {<About />} /> */}
    {/* <Route path="/" element={ */}     
       {/* /> */}
   {/* </Routes> */} 
  //  </Router>


export default App;
