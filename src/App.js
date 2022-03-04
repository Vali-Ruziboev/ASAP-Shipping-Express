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
import PageNotFound from './Components/PageNotFound';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Testimonial />
          <WeShipEveryWhere />
          <Location/>
          <Footer />
        </Route>
        <Route path='/faqs'>
          <Faqs />
          <Footer />
        </Route>
        <Route path='/step_by_step_guide'>
          <Step_By_Step_Guide />
          <Footer />
        </Route>
        <Route path='/contact_us'>
          <Contact_Us />
          <Footer />
        </Route>
        <Route path='/terms_and_conditions'>
          <Terms_and_conditions />
          <Footer />
        </Route>
        <Route path='/:state'>
            <State />
        </Route>
        <Route path='/*'>
            <PageNotFound/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
