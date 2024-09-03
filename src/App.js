import React from 'react';
import './App.css';
import {Routes , Route} from "react-router-dom"
import HomePage from './Components/HomePage';
import Login from './Components/Login';
import SignUp from './Components/SignUp';

function App() {
  return (
<Routes>
<Route path='/' element={ <HomePage/>}/>
<Route path='/Login' element = {<Login/>}/>
<Route path='/Register' element = {<SignUp/>}/>
</Routes>
   
   
    
  );
}

export default App;
