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

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main/>}></Route>
      <Route path='product' element={<Product/>}></Route>
      <Route path='category' element={<Category/>}></Route>
      <Route path='addcategory' element={<AddCategory/>}></Route>
      <Route path='view' element={<View/>}></Route>
      <Route path='update' element={<Update/>}></Route>
      <Route path='admin' element={<Admin/>}></Route>
      <Route path='addProduct' element={<AddProduct/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
