
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Provider } from "react-redux"
import store from "../../redux/store.js"
import Navigation from '../Layout/Navigation';
import Main from '../Main/Main';
import Events from '../CardList/Events';
import Map from '../Map/Map';
import Favorites from '../Favorites/Favorites';
import EventInfo from '../CardList/EventInfo';

function App() {
  return (
    <Provider store= { store } >
      <Router>
        <Navigation />

        <Switch>
          <Route path="/" exact>
            <Main />
          </Route>
          <Route path="/events/:id" exact>
            <EventInfo />
          </Route>
          <Route path="/events" exact>
            <Events />
          </Route>
          <Route path="/map">
            <Map />
          </Route>
          <Route path="/favorites">
            <Favorites />
          </Route>
        </Switch>
      </Router>
    </Provider >
  );
}

export default App;
