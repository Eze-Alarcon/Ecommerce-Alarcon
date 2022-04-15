import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar'
import ItemDetailContainerLogic from './components/ItemDetailContainerLogic';
import ItemListLogic from './components/ItemListLogic'
import CategoryListContainer from './components/CategoryListContainer'
import Cart from './components/Cart';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
        <Navbar/>
        <Routes>
          <Route path="/" element={<ItemListLogic/>} />
          <Route path="/:idCategory" element={<CategoryListContainer/>} />
          <Route path="/products/:idProduct" element={<ItemDetailContainerLogic/>} /> 
          <Route path="/cart" element={<Cart/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
