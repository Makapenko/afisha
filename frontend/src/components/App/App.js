import style from './App.module.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Provider } from "react-redux"
import store from "../../redux/store.js"
import Navigation from '../Layout/Navigation';
import Main from '../Main/Main'; // !!!!!!!!!!!!!!!!!!!!!! TEST
import YandexMap from '../YandexMap/YandexMap';
import Events from '../CardList/Events';
import Favorites from '../Favorites/Favorites';
import EventInfo from '../CardList/EventInfo'; 
import PlaceInfo from '../Places/PlaceInfo';
import Places from '../Places/Places';
import Auth from '../Auth/Auth';
import Signup from '../Auth/Signup';
import Account from '../Account/Account';

function App() {

  return (
    <div className={style.app}>
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

            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/auth">
              <Auth />
            </Route>
            <Route path="/account">
              <Account />
            </Route>

          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
