import { Routes, Route } from 'react-router-dom'
import { Home } from './components/Home/Home'
import { SendOTP } from './components/Email/Form'
import { Login } from './components/Login/Login'
import { Register } from './components/Login/Register'
import { OTPpage } from './components/OTP/OTPpage'
import { OrderConfirm } from './components/OrderConfirm/Acknowldegment'
import { Products } from './components/Product/Products'
import { ProductDetails } from './components/Product/ProductDetails'
import { Checkout } from './components/Checkoutandpayment/Checkout'
import { Payment } from './components/Checkoutandpayment/Payment'
import { ProductCart } from './components/ProductCart/ProductCart'

function App() {
  return (
    <div className="App">
  
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/verification" element={<SendOTP />}></Route>
        <Route path="/OTP" element={<OTPpage />}></Route>
        <Route path="/orderConfirm" element={<OrderConfirm />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/payment" element={<Payment />}></Route>
        <Route path="/cart" element={<ProductCart />}></Route>

        <Route exact path="/products" element={<Products />}></Route>
        <Route path="/products/:keyword" component={Products} />
        <Route exact path="/product/:id" element={<ProductDetails />}></Route>
      </Routes>
      
    </div>
  )
}

export default App
