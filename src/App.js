import React, { useState } from "react";
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import Navbar from './components/Navbar';

function App() {
const [mode,setMode]=useState('light');
const toggleMode = ()=>{
  if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor='black';
    document.body.style.color='white';
    showAlert("Dark mode has been enabled","success");
    document.title='Textutils - Dark mode'
  }
  else{
    setMode('light');
    document.body.style.backgroundColor='white';
    document.body.style.color='black';
    showAlert("light mode has been enabled","success");
    document.title='Textutils - Light mode'
  }
};
const A = ()=>{
  if(mode==='light'||mode==='dark'||mode==='#283618'){
    setMode('#faedcd');
    document.body.style.backgroundColor='#faedcd';
    document.body.style.color='black';
    showAlert("Light theme has been enabled","success");
  }
  else{
    setMode('light');
    document.body.style.backgroundColor='white';
    document.body.style.color='black';
    showAlert("light mode has been enabled","success");
  }
};
const B = ()=>{
  if(mode==='light'||mode==='dark'||mode==='#faedcd'){
    setMode('#283618');
    document.body.style.backgroundColor='#283618';
    document.body.style.color='white';
    showAlert("Dark theme has been enabled","success");
  }
  else{
    setMode('light');
    document.body.style.backgroundColor='white';
    document.body.style.color='black';
    showAlert("light mode has been enabled","success");
  }
};
// ? Alert
const [alert, setAlert] = useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 1800);
  };
  return (
    <>
<Navbar showAlert={showAlert} mode={mode} toggle={toggleMode} buttonA={A} buttonB={B} />
<div className="container">
<Alert alert={alert}/>
<TextForm showAlert={showAlert} mode={mode}/>
</div>
  </>
  );
};
export default App;