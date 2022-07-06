
import './App.css';
import Navbar from './MyComponent/Navbar';
import Textarea from './MyComponent/Textarea';
import About from './MyComponent/About';
import React, { useState } from "react"
import Alert from './MyComponent/Alert';

import {
  BrowserRouter as Router,
  Switch, 
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");

  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
  }

  const togglemode = () => {
    if (mode === "light") {
      setmode("dark")
      document.body.style.background = "#042743";
      showAlert("sucess");
      document.title = "textutil-dark mode";
    }
    else {
      setmode("light")
      document.body.style.background = "white";
      showAlert("sucess");
      document.title = "textutil-light mode";

    }
  }
  return (
    <>
    <Router>
      <Navbar title="textutils" abouttext="about us" mode={mode} togglemode={togglemode} />
      <Alert alert={alert} />
      

        <div className="container">
          <Switch>
            <Route path="/about">
              <About />
            </Route>

            <Route path="/">
              <Textarea showAlert={showAlert} heading="Enter the text to analyse" mode={mode} />
            </Route> 
          </Switch>

        </div>
      </Router>
     
      </>
  );
}

export default App