
import './App.css';
import Header from './component/Header/Header';
import Product from './component/Product/Product';
import Shop from './component/Shop/Shop';
import {BrowserRouter,Link,Routes,Route} from "react-router-dom";
import Review from './component/Review/Review';
import Inventory from './component/Inventory/Inventory';
import ProductDetail from './component/ProductDetail/ProductDetail';
function App() {
  return (
    <div className="App">
   <Header></Header>
   <BrowserRouter>
   <Routes>
   <Route path='/' element={<Shop/>}> </Route>
   <Route path='/Shop' element={<Shop/>}> </Route>
   <Route path='/review' element={<Review/>}></Route>
    <Route path='/inventory'element={<Inventory/>}></Route>
    <Route path='/product/:productKey' element={<ProductDetail/>}></Route>
     

   </Routes>

   </BrowserRouter>
   
    </div>
  );
}

export default App;
