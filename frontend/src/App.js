import { useEffect, useState } from "react";
import Input from './components/Input';
import Spinner from './components/spinner/Spinner';
import './app.scss'

function App() {
  // const [data, setData] = useState(null);
  const [url,setUrl] = useState('')
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false)
  const handleChange = (e)=> {
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
        } else {
          setIsError(true)
          setIsLoading(false)
        }
      })      
    e.preventDefault();
    
  }

  return (
    <div>
      <Input handleChange={handleChange} handleSubmit={handleSubmit} />
      {isError ? 'Your url is not valid' : ''}
      {isLoading ? <Spinner /> : ''}
    </div>
  );
}

export default App;