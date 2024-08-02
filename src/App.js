//import logo from './logo.svg';
import './App.css';
import Blog from './component/Blog';
import Main from './component/Main';
import {
  Route,
  BrowserRouter as Router, Routes,   //we use HashRouter instead of BrowserRouter because github does not support BrowserRouter in deployment 
} from "react-router-dom";
import Services from './component/Services';
import Contact from './component/Contact';
import Header from './component/Header';
import Myintro from './component/Myintro'
import { useState } from 'react';
import cross from './component/cross.png'
import hamburimage from './component/hamburger.png'
import Hamburg from './component/Hamburg';

function App(props) {
  const [cross_sign,setcross_sign]=useState('');
  const [hamburimg,sethamburimg]=useState(hamburimage);
  const [sidebar,setsidebar]=useState('sidebargo');
  const handleupclick=()=>{
    setsidebar('sidebar');
    setTimeout(() => {
      setcross_sign(cross);
    }, 300);
    sethamburimg('')
  }
  const handleupclick1=()=>{
    setsidebar('sidebargo');
    setcross_sign('');
    sethamburimg(hamburimage);
  }
  
  

  return (
    <div className="container">
    <Router>
      <Header toggleclass={sidebar}/>
      <Hamburg handleupclick={handleupclick} handleupclick1={handleupclick1} hamburimg={hamburimg} cross_sign={cross_sign} hamaltimg={''} crossaltimg={''}/>
      <Routes>
        <Route exact path="/" element={<Main altimg="akash image"/>}></Route>
        <Route exact path="/my-intro" element={<Myintro/>}></Route>
        <Route exact path='/blog' element={<Blog/>}></Route>
        <Route exact path='/services' element={<Services/>}></Route>
        <Route exact path='/contact' element={<Contact/>}></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
