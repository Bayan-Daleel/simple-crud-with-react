import './App.css';
import Navbar from './components/Navbar';
import Sidebar  from './components/Sidebar';
import { Routes, Route, Outlet } from "react-router-dom";
import Products  from './components/pages/Products';
import Home  from './components/pages/Home';
import AddProducts  from './components/pages/AddProducts';
import ProductDetails  from './components/pages/ProductDetails';
import EditProduct from './components/pages/EditProduct';
function App() {
  return (
    <div className="App">
   <Navbar/>
   <div className="row">
    <div className="col-2 sidebar">
     <Sidebar/>
    </div>
    <div className="col-10">
      <Routes>
        <Route path="/" element={<Home/>}/>
        
        <Route path="products" element={<>
          <Outlet/>
        </>
       }>
        <Route path="" element={<Products/>}/>
        <Route path="add" element={<AddProducts/>}/>
        <Route path=":productid" element={<ProductDetails/>}/>
        <Route path="edit/:productid" element={<EditProduct/>}/>
        </Route>
        </Routes>
    </div>
     </div>
     </div>
  );
}

export default App;
