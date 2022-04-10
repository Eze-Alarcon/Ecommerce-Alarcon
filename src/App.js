import './App.css';
import Navbar from './components/NavBar'
import ItemDetailContainerLogic from './components/ItemDetailContainerLogic';


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
