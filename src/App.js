import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './Main';
import Product from './Product';
import Category from './Category';
import AddCategory from './AddCategory';
import Admin from './Admin';
import AddProduct from './AddProduct'
import View from './View'
import Update from './Update'
import AllProducts from './AllProducts';
import Landing from './Landing';
import Login from './Login';
import Cookie from './Cookie';
import Specific from './Specific';
import Cart from './Cart';

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landing/>}></Route>
      <Route path='main' element={<Main/>}></Route>
      <Route path='login' element={<Login/>}></Route>
      <Route path='product' element={<Product/>}></Route>
      <Route path='category' element={<Category/>}></Route>
      <Route path='addcategory' element={<AddCategory/>}></Route>
      <Route path='view' element={<View/>}></Route>
      <Route path='update' element={<Update/>}></Route>
      <Route path='admin' element={<Admin/>}></Route>
      <Route path='cookie' element={<Cookie/>}></Route>
      <Route path='addProduct' element={<AddProduct/>}></Route>
      <Route path='allproduct' element={<AllProducts/>}></Route>
      <Route path='specific' element={<Specific/>}></Route>
      <Route path='cart' element={<Cart/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
