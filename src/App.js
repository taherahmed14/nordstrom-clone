import './App.css';
import { Routes, Route } from "react-router-dom";
import { SendOTP } from './components/Email/Form';
import { Login } from './components/Login';
import { Register } from "./components/Register";
import Products from "./components/Products/Products";
import axios from 'axios';


function App() {
  
   async function getUser() {
    
    await fetch('http://localhost:4500/products/')
     .then((response) => response.json())
     .then((data) =>console.log(data))
  }
  getUser()

  return (
    <div className="App">
      <Routes>
        <Route path="login" element={<Login />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="/verification" element={<SendOTP />}></Route>
        <Route path ="/products" element ={<Products/>}> </Route>
      </Routes>
    </div>
  );
}

export default App;
