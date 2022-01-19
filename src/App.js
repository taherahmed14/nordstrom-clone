import './App.css';
import { Routes, Route } from "react-router-dom";
import { SendOTP } from './components/Email/Form';
import { Login } from './components/Login';
import { Register } from "./components/Register";
import Products from "./components/Products/Products";
import {ProductDetails} from './components/Products/ProductDetails';

import { useEffect } from 'react';
import { useDispatch ,useSelector } from 'react-redux';

import {getProducts} from './Features/Product/action'

function App() {
   
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts())
  },[])

   const { products } = useSelector((state) => ({
        products: state.productsState.products,
   }));
  
  return (
    <div className="App">
      <Routes>
        <Route path="login" element={<Login />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="/verification" element={<SendOTP />}></Route>
        <Route path ="/products" element ={<Products products={products}/>}> </Route>
        <Route path ="/products/:id" element ={<ProductDetails/>}> </Route>
      </Routes>
    </div>
  );
}

export default App;
