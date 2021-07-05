import React, { useState } from 'react';
import Input from '../components/urlInput/Input';
import Spinner from '../components/spinner/Spinner';
import './home.scss';

const Home = () => {
    const [url, setUrl] = useState('')
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false)
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
                } else {
                    setIsError(true)
                    setIsLoading(false)
                }
            })
        e.preventDefault();

    }
    return <div id="url-card">
            <h3>Get your free accessibility report now</h3>
            <Input handleChange={handleChange} handleSubmit={handleSubmit} />
            {isError ? 'Your url is not valid' : ''}
            {!isLoading ? <Spinner /> : ''}
            {console.log(isLoading)}
        </div>
};

export default Home;