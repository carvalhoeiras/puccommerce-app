import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';


function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
              <header className="row">
                  <div>
                      <a className= "brand" href="/">Puc-Commerce</a>
                  </div>
                  <div>
                      <a href="/cart">Cesta</a>
                      <a href="/signin">Login</a>
                  </div>
              </header>
              <main>
                <Route path="/product/:id" component={ProductScreen}></Route>
                <Route path="/" component={HomeScreen} exact></Route>
              </main>
              <footer className="row center"> Todos os direitos reservados</footer>
          </div>
        </BrowserRouter>
  );
}

export default App;
