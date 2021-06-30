import Home from './components/pageComponents/Home';
import About from './components/pageComponents/About';
import Contact from './components/pageComponents/Contact';
import Animal from './components/pageComponents/Animal';
import AddAnimal from './components/pageComponents/AddAnimal';
import Nav from './components/Nav';
import Footer from './components/Footer';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <AddAnimal />
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

          <Route path="/animal/:name">
            <Animal />
          </Route>

        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App;