// import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import Alert from './components/Alert';
import { useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  Routes,
} from "react-router-dom";

function App() {
  const [mode , setMode] = useState('light');
  const [alert , setAlert] = useState(null)
  const showAlert = (message , type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode ('dark');
      document.body.style.backgroundColor = '#042743';
    }
    else{
      setMode ( 'light');
      document.body.style.backgroundColor = 'white';

    }
  }
  return (
     <>
    {/* <Navbar/> */}

    <Navbar title = "TextUtil" about="About us" mode = {mode} toggleMode = {toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3"  >
      <Router>
      <Routes>
      <Route exact path='/' element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode = {mode} />} />
      <Route exact path='/about' element={<About mode = {mode}/>} />
    
      </Routes>
      </Router>
    </div>
     </>
  );
}

export default App;
