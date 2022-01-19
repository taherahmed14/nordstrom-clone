import './App.css';
import { Routes, Route } from "react-router-dom";
import { SendOTP } from './components/Email/Form';
import { Login } from './components/Login';
import { Register } from "./components/Register";
import { OTPpage } from './components/OTPpage';
import { OrderConfirm } from './components/Acknowldegment';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/verification" element={<SendOTP />}></Route>
        <Route path="/OTP" element={<OTPpage />}></Route>
        <Route path="/orderConfirm" element={<OrderConfirm />}></Route>
      </Routes>
      //Hi 
    </div>
  );
}

export default App;
