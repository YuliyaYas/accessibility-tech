import React, { useState } from 'react';
import './app.scss'
import { ReactComponent as Logo } from './assets/svgs/logo-text.svg';
import Home from './pages/Home';
import Menu from './components/menu/Menu';
import Footer from './components/footer/Footer';
// import Results from './pages/Results';
import About from './pages/about/About';
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
      setUrl(e.target.value)
  };

  const handleSubmit = (e) => {
      setIsLoading(true);
      setIsError(false);
      const pattern = /^((http|https|ftp):\/\/)/;

      window && window.analytics && window.analytics.track("URL", {
        name: "Scanned URL",
        url: url
      });

      if(pattern.test(url)) {
        fetch('https://api.accessibility-report.com/page-scan', {
          method: 'post',
          headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ url })
      })
          .then(res => {
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
            if(resp){
              resp.image && setWebImg(resp.image)
              setRules(resp.result)
            } else {
              setIsError(true)
            }
            
          })
      } else {
        setIsError(true)
        setIsLoading(false)
      }
     
      e && e.preventDefault();

  }

  return (
    <>
      <div className="app">
        <Router>
        <Link to="/"><Logo id="logo"/></Link>
        {/* <Menu /> */}
          <Switch>
            <Route path="/about">
              <About />
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