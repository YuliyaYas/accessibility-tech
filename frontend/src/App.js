import './app.scss'
import { ReactComponent as Logo } from './assets/svgs/logo-text.svg';
import Home from './pages/Home';
import Menu from './components/menu/Menu';
import Footer from './components/footer/footer';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <div className="app">
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
      <Footer />
    </>
  );
}

export default App;