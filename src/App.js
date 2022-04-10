import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar'
import ItemDetailContainerLogic from './components/ItemDetailContainerLogic';
import ItemListLogic from './components/ItemListLogic'
import CategoryListContainer from './components/CategoryListContainer'

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
        <Navbar/>
        <Routes>
          <Route path="/" element={<ItemListLogic/>} />
          <Route path="/:idCategory" element={<CategoryListContainer/>} />
          <Route path="/products/:idProduct" element={<ItemDetailContainerLogic/>} /> 
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
