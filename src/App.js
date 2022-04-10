import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/NavBar'
import ItemDetailContainerLogic from './components/ItemDetailContainerLogic';
import { Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer'
import { Switch } from 'react-router-dom'; 


// usando version 5 de react-router-dom

/* 

Al leer las rutas, react router, identifica el primer match y reacciona mostrando ese componente (aunque no sea el correcto)
En el siguiente codigo, react funcionara como uno esperaria, pero no es la forma natural de lectura que uno esperaria... tendriamos primero un monton de componentes que corresponden a otras rutas mas avanzadas y al uuuuuultimo, nuestro componente "home".

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/details"> 
            <Navbar/>
            <ItemDetailContainerLogic/>
          </Route>
          <Route path="/">
            <Navbar/>
            <ItemListContainer/>
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
 
*/


/* 
  Para evitar el comportamiento descripto anteriormente, podemos usar la palabra "exact".
  De esta forma, react buscara la ruta exacta y no "lo primero que le parezca ok..."
*/

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Navbar/>
            <ItemListContainer/>
          </Route>
          <Route exact path="/details"> 
            <Navbar/>
            <ItemDetailContainerLogic/>
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;