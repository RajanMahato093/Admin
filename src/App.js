import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './Main';
import Product from './Product';
import Category from './Category';
import AddCategory from './AddCategory';

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main/>}></Route>
      <Route path='product' element={<Product/>}></Route>
      <Route path='category' element={<Category/>}></Route>
      <Route path='addcategory' element={<AddCategory/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
