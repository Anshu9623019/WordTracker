import './App.css';
import Navbar from './components/Navbar.js'
import TextForm from './components/TextForm.js'
import Alert from './components/Alert.js'
// import About from './components/About.js'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";
import React, { useState } from 'react';

 
function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type

  })
  setTimeout(() => {
    setAlert(null)
  }, 2000);

  } 

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enable","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
    {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
    {/* <Navbar/> */}
    {/* <Router> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}></Alert>
    <div className="container my-3">
    {/* <Switch>
          <Route exact path="/about">
            <About  mode={mode} />
          </Route>
          <Route exact path="/"> */}
          <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
          {/* </Route> */}
    {/* </Switch>   */}
    </div>
    {/* </Router> */}
    </> 
  );
}

export default App;