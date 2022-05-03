import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar'
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemList from './components/ItemList'
import CategoryListContainer from './components/CategoryListContainer'
import Cart from './components/Cart';
import About from './components/About';
import CartContextProvider from './context/CartContext';


function App() {
	return (
		<div className="App min-h-screen">
		<CartContextProvider>
			<BrowserRouter> 
				<Navbar/>
				<Routes>
					<Route path="/" element={<ItemList/>} />
					<Route path="/:idCategory" element={<CategoryListContainer/>} />
					<Route path="/products/:idProduct" element={<ItemDetailContainer/>} /> 
					<Route path="/cart" element={<Cart/>} />
					<Route path="/about" element={<About/>} />
				</Routes>
			</BrowserRouter>
		</CartContextProvider>
		</div>
	);
}

export default App;
