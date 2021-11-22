import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from "./components/Header";
import  Home  from './pages/Home'
import  Catalog  from './pages/Catalog'
import  Search  from './pages/Search'
import ViewMovie from './pages/ViewMovie'

import NotFound from "./pages/NotFound";

const  App = () => {
  return (
    <div className="App">
      <Router>
      <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route  path="/catalog/:genreid">
            <Catalog />
          </Route>
          <Route  path="/catalog">
            <Catalog />
          </Route>
          <Route  path="/search">
            <Search />
          </Route>
          <Route exact path="/movie/:id">
            <ViewMovie  />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
