import React, { useState } from 'react';
import './app.scss'
import { ReactComponent as Logo } from './assets/svgs/logo-text.svg';
import Home from './pages/Home';
import Menu from './components/menu/Menu';
import Footer from './components/footer/Footer';
// import Results from './pages/Results';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

const App = () => {
  const [url, setUrl] = useState('')
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [rules, setRules] = useState([]);
  const [webImg, setWebImg] = useState(null);

  const handleChange = (e) => {
    console.log("IM HERE", e.target.value)
      setUrl(e.target.value)
  };

  const handleSubmit = (e) => {
console.log(url)
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
            console.log(res.ok)
              if (!res.ok){
                setIsError(true)
                setIsLoading(false)
                throw Error(res.statusText);
              } else if (res.ok){
                setIsError(false)
                setIsLoading(false)
                return res.json()
              }
          })
          .catch(err => console.log('err', err))
          .then( resp => {
            console.log('resp', resp)
            if(resp){
              resp.image && setWebImg(resp.image)
              setRules(resp.result)
            } else {
              setIsError(true)
            }
            
          })
      e && e.preventDefault();

  }

  return (
    <>
      <div className="app">
        <Router>
        <Link to="/"><Logo /></Link>
        {/* <Menu /> */}
          <Switch>
            <Route path="/about">
              {/* <About /> */}
            </Route>
            {/* <Route path="/results">
              <Results 
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                isError={isError}
                isLoading={isLoading}
                rules={rules}
              />
            </Route> */}
            <Route path="/">
              <Home 
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                isError={isError}
                isLoading={isLoading}
                rules={rules}
                webImg={webImg}
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