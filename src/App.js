import './App.css';
import Navbar from './components/NavBar'
// import ItemListContainer from './components/ItemListContainer'
import ProductDetailLogic from './components/ProductDetailLogic';


function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <ItemListContainer/> */}
      <ProductDetailLogic/>
    </div>
  );
}

export default App;
