import './App.css';
import { Routes, Route } from "react-router-dom";
import {Home} from './components/Home/Home';
import { SendOTP } from './components/Email/Form';
import { Login } from './components/Login/Login';
import { Register } from './components/Login/Register';
import { OTPpage } from './components/OTP/OTPpage';
import { OrderConfirm } from './components/OrderConfirm/Acknowldegment';
import {Products} from './components/Product/Products';
import {ProductDetails} from './components/Product/ProductDetails';
import Header from './components/Home/Header';
import Footer from './components/Home/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/verification" element={<SendOTP />}></Route>
        <Route path="/OTP" element={<OTPpage />}></Route>
        <Route path="/orderConfirm" element={<OrderConfirm />}></Route>

        <Route exact path ="/products" element ={<Products/>}> </Route>
        <Route path="/products/:keyword" component={Products} />
        <Route exact path ="/product/:id" element ={<ProductDetails/>}> </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
