
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Provider } from "react-redux"
import store from "../../redux/store.js"
import Navigation from '../Layout/Navigation';
import Main from '../Main/Main';
import CardList from '../CardList/CardList';
import YandexMap from '../YandexMap/YandexMap';
import Favorites from '../Favorites/Favorites';


function App() {

  return (
    <Provider store= { store } >
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
            <YandexMap />
          </Route>
          <Route path="/favorites">
            <Favorites />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
