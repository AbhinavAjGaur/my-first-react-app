import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link } from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  } 

  const toggleMode = () => {
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success ");
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success " );
    }
  }
 

  return (
    <>
    <Router>
      <Navbar title="Abhinav" About="About Abhinav" mode={mode} toggleMode={toggleMode} /> 
      <Alert alert ={alert}/>
      <div className="container my-3">
        <Routes>
          <Route path="/about" element={<About mode={mode}/>}/>
          <Route path="/" element={<TextForm showAlert={showAlert} heading ="Enter a text to analyze"  mode={mode } />}/>
        </Routes>
        </div>
        </Router>
        
     
    </>
  );
}

export default App;
