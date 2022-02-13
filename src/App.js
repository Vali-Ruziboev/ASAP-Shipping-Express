import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Testimonial from './Components/Testimonial';
import WeShipEveryWhere from './Components/WeShipEveryWhere';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Faqs from './Components/Faqs';

function App() {
  return (
    <Router>
    <div className="App">
      {/* <Header /> */}
      <Switch>
        <Route path='/faqs'>
          <Faqs />
        </Route>
        <Route path='/'>
          <Testimonial />
          <WeShipEveryWhere />
        </Route>
      </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
