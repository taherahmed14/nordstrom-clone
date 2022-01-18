import './App.css';
import { Routes, Route } from "react-router-dom";
import { SendOTP } from './components/Email/Form';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/verification" element={<SendOTP />}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
