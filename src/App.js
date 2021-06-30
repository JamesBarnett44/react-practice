import Home from './components/pageComponents/Home';
import About from './components/pageComponents/About';
import Contact from './components/pageComponents/Contact';
import Product from './components/pageComponents/Product';
import Nav from './components/Nav';
import Footer from './components/Footer';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


// Router switch case goes in parent component
// Nav (or equivalent) goes at the top of the router
// Footer goes at the bottom
// Anything in <Switch> are the cases to switch between
// Route specify path, if path matches render that component
function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>

          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/product">
            <Product />
          </Route>

        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App;