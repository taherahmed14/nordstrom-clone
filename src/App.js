import './App.css';
import { Routes, Route } from "react-router-dom";
import { SendOTP } from './components/Email/Form';
import { Login } from './components/Login';
import { Register } from "./components/Register";
import Products from "./components/Products/Products";

function App() {
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
