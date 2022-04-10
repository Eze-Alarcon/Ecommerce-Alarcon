import './App.css';
import Navbar from './components/NavBar'
import ItemDetailContainerLogic from './components/ProductDetailLogic';


function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <ItemListContainer/> */}
      <ItemDetailContainerLogic/>
    </div>
  );
}

export default App;
