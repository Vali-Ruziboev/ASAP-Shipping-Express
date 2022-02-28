import './App.css';
import Footer from './Components/Footer';
import Testimonial from './Components/Testimonial';
import WeShipEveryWhere from './Components/WeShipEveryWhere';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Faqs from './Components/Faqs';
import Step_By_Step_Guide from './Components/Step_By_Step_Guide';
import Contact_Us from './Components/Contact_Us';
import Terms_and_conditions from './Components/Terms_and_conditions';
import State from './Components/State';
import Location from './Components/Location';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path='/faqs'>
          <Faqs />
        </Route>
        <Route path='/step_by_step_guide'>
          <Step_By_Step_Guide />
        </Route>
        <Route path='/contact_us'>
          <Contact_Us />
        </Route>
        <Route path='/terms_and_conditions'>
          <Terms_and_conditions />
        </Route>
        <Route path='/:state'>
            <State />
        </Route>
        <Route path='/'>
          <Testimonial />
          <WeShipEveryWhere />
          <Location/>
        </Route>
      </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
