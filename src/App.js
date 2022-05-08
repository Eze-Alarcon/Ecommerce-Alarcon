import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar'
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer'
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
					<Route path="/" element={<ItemListContainer/>} />
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


/* 

Rutas y componentes utilizados:

	Default
		- NavBar
			* NavBarWidget
	
	1era ruta: "/"
		- ItemListContainer
			* Banner
			* ItemList
				* Item
					* Stars
			* ErrorPage

	2da ruta: "/:idCategory"
		- CategoryListContainer
			* Item
				* Stars
			* ErrorPage

	3era ruta: "/products/:idProduct"
		- ItemDetailContainer
			* ItemDetail
				* ItemCount
				* Stars
			* ErrorPage

	4ta ruta: "/cart"
		- Cart
			* CartAside
				* CartModal

	5ta ruta: "/about"
		- About

*/