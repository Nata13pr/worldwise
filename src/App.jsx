import { BrowserRouter, Routes,Route } from "react-router-dom";
import Homepage from "./assets/pages/Homepage";
import PageNotFound from "./assets/pages/PageNotFound";
import Pricing from "./assets/pages/Pricing";
import Product from "./assets/pages/Product";

function App (){
  
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Homepage/>}/>
    <Route path="product" element={<Product/>}/>
    <Route path="pricing" element={<Pricing/>}/>
    <Route path ='*' element={<PageNotFound/>}/>
  </Routes>
  </BrowserRouter>
  )
}
export default App;