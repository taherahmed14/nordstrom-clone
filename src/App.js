import './App.css';
import { Routes, Route } from "react-router-dom";
import { SendOTP } from './components/Email/Form';
import { Login } from './components/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="login" element={<Login />}></Route>
        <Route path="/verification" element={<SendOTP />}></Route>
      </Routes>
    </div>
  );
}

export default App;
