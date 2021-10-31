import logo from './logo.svg';
import './App.css';
import Navbarcomponent from './components/Navbarcomponent/navbar';
import Movies from './pages/movies/movies';
import Detais from './pages/Moviedetails/detais';
import Home from './pages/home/home';
import Errorpage from './pages/404/404';
import Favs from './pages/Favouritespage/Favs';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <Router>
      <Navbarcomponent></Navbarcomponent>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/movies' exact component={Movies} />
        <Route path='/details/:id' exact component={Detais} />
        <Route path='/favs' exact component={Favs} />
        <Route path='*' exact component={Errorpage} />
        
      </Switch>
    </Router>
    </>
  );
}

export default App;
