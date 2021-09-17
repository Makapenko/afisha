
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Provider } from "react-redux"
import store from "../../redux/store.js"
import Navigation from '../Layout/Navigation';
import Main from '../Main/Main';
import YandexMap from '../YandexMap/YandexMap';
import Events from '../CardList/Events';
import Favorites from '../Favorites/Favorites';
import AddEventAndPlace from '../AddEventAndPlace/AddEventAndPlace';
import EventInfo from '../CardList/EventInfo';
import Place from '../Places/Place';
import PlaceInfo from '../Places/PlaceInfo';
import Places from '../Places/Places';


function App() {

  return (
    <Provider store={store} >
      <Router>
        <Navigation />

        <Switch>
          <Route path="/" exact>
            <Main />
          </Route>
          <Route path="/events/place/:id" exact>
            <PlaceInfo />
          </Route>
          <Route path="/events/:id" exact>
            <EventInfo />
          </Route>
          <Route path="/events" exact>
            <Events />
          </Route>

          <Route path="/places" exact>
            <Places />
          </Route>
          <Route path="/map">
            <YandexMap />
          </Route>
          <Route path="/favorites">
            <Favorites />
          </Route>
          <Route path="/addEventAndPlace">
            <AddEventAndPlace />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
