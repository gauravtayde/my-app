//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';

function App() {
  const [mode,setMode]=useState('light');
  const [text,setText]=useState('dark');

  const modeHandle=()=>{
    if(mode === 'light')
    {setMode('dark');
     document.body.style.backgroundColor='#3f464d';
      setText('light');}
    else{
      setText('dark');
      document.body.style.backgroundColor='white';
      setMode('light');
    }
  }
  return (
    <>
      <NavBar title="MyWebsite" mode={mode} modeHandle={modeHandle} text={text} AboutText="About Me"/>
      <div className="container my-3">
      
        <TextForm text={text} mode={mode} firstHeading="Enter Anything"/>
        <About text={text} mode={mode}/>  
      </div>
    </>
  );
}

export default App;
