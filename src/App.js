import './App.css';
import { useState } from 'react';
import Navbar from './def/Navbar'
import About from './def/About'
import Learn from './def/Learn'
import Home from './def/Home';
import Community from './def/Commonity';
import SocialLinks from './def/SocialLinks';

function App() {
  const [baselayout, setbase]=useState({
    backgroundColor : '#FFF9F8',
    backgroundSize:'cover',
  });
  const [pg,setpg]=useState('home');
  const [mode,setModetext]=useState('light');
  const [mode1, setMode]=useState({
    backgroundColor : '#FFF9F8',
    color : 'black',
  });
  const modeChange = ()=>{
    if(mode==='dark')
    {
      setMode({
        backgroundColor : '#FFF9F8',
        color : 'black',
      });
      setModetext('light')
      setbase({
        backgroundColor : '#FFF9F8',
        backgroundSize:'cover',
      });
    }
    else
    {
      setMode({
        backgroundColor : '#0A151F',
        color : 'white',
      });
      setModetext('dark');
      setbase({
        backgroundColor : '#0A151F',
        backgroundSize:'cover',
      });
    }
  }
  const home = ()=>{setpg('home')}
  const about = ()=>{setpg('abt')}
  const commu = ()=>{setpg('commu')}
  const learn = ()=>{setpg('learn')}
  return (
    <div style={baselayout}>
      <Navbar heading="Rabindra art school" author="Kishu" modeChange={modeChange} mode={mode} abt={about} lrn={learn} com={commu} home={home}/>
      <Tmgr val={pg} mod={mode1} m={mode}/>
      <SocialLinks/>
    </div>
  );
}

function Tmgr(props){
  if(props.val==='abt')
  return(
    <About mode={props.mod} m={props.m}/>
  )
  if(props.val==='home')
  return(
    <Home mode={props.mod} m={props.m}/>
  )
  if(props.val==='learn')
  return(
    <Learn mode={props.mod} m={props.m}/>
  )
  if(props.val==='commu')
  return(
    <Community mode={props.mod} m={props.m}/>
  )
}

export default App;
