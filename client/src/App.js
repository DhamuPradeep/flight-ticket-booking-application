import logo from './logo.svg';
import './App.css';
import Appbar from './components/appbar';
import { Routes,Route } from 'react-router-dom';
import Home from './components/home';
import SignUp from "./components/signup";
import LogIn from './components/login';
import { useContext,createContext, useState } from 'react';

function App() {
  
  return (
    <div className="App">
      <Appbar></Appbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
      </Routes>
    </div>
  );
}

export default App;