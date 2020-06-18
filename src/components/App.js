import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home/Home';
import Navbar from '../containers/Navbar';
import Footer from '../containers/Footer';
import Contact from '../containers/Contact';
import Audios from '../containers/Audios';
import Videos from '../containers/Videos';
import About from './About';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/historia" component={About} />
          <Route path="/audios" component={Audios} />
          <Route path="/videos" component={Videos} />
          <Route path="/contacto" component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
