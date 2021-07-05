import './app.scss'
import { ReactComponent as Logo } from './assets/svgs/logo.svg';
import Home from './pages/Home';
import Menu from './components/menu/Menu';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Logo />
      <Router>
       {/* <Menu /> */}
        <Switch>
          <Route path="/about">
            {/* <About /> */}
          </Route>
          <Route path="/users">
            {/* <Users /> */}
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;