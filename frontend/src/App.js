import React, { useEffect, useState } from 'react';
import './app.scss'
import { ReactComponent as Logo } from './assets/svgs/logo-text.svg';
import Home from './pages/Home';
import Menu from './components/menu/Menu';
import Footer from './components/footer/Footer';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App = () => {
  const [url, setUrl] = useState('')
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false)
  const [rules, setRules] = useState([])

  const handleChange = (e) => {
      setUrl(e.target.value)
  }

  const handleSubmit = (e) => {
      setIsLoading(true)
      setIsError(false)
      fetch('/page-scan', {
          method: 'post',
          headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ url })
      })
          .then(res => {
              if (res.ok) {
                  setIsError(false)
                  setIsLoading(false)
                  // res.json()
                  return res.json()
              } else {
                  setIsError(true)
                  setIsLoading(false)
              }
          })
          .then( resp => setRules(resp.result))
      e.preventDefault();

  }

  useEffect(() => {
      setIsError(false)
  }, []);
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
              <Home 
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                isError={isError}
                isLoading={isLoading}
                rules={rules}
              />
            </Route>
          </Switch>
      </Router>
      </div>
      <Footer />
    </>
  );
}

export default App;