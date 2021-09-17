
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Provider } from "react-redux"
import store from "../../redux/store.js"
import Navigation from '../Layout/Navigation';
import Main from '../Main/Main';
import CardList from '../CardList/CardList';
import Map from '../Map/Map';
import Favorites from '../Favorites/Favorites';
import AddEventAndPlace from '../AddEventAndPlace/AddEventAndPlace';

function App() {
  return (
    <Provider store={store} >
      <Router>
        <Navigation />

        <Switch>
          <Route path="/" exact>
            <Main />
          </Route>
          <Route path="/cardList">
            <CardList />
          </Route>
          <Route path="/map">
            <Map />
          </Route>
          <Route path="/favorites">
            <Favorites />
          </Route>
          <Route path="/addEventAndPlace">
            <AddEventAndPlace />
          </Route>
        </Switch>
      </Router>
    </Provider >
  );
}

export default App;
