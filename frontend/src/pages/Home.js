import React, { useEffect, useState } from 'react';
import Input from '../components/urlInput/Input';
import Spinner from '../components/spinner/Spinner';
import './home.scss';
import { ReactComponent as AnalyticsImg } from '../assets/svgs/analytics.svg';
import { ReactComponent as CheckImg } from '../assets/svgs/check.svg';
import { ReactComponent as StatisticsImg } from '../assets/svgs/statistics.svg';
import Form from '../components/form/form';

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
                    return res.json()
                } else {
                    setIsError(true)
                    setIsLoading(false)
                }
            })
            .then( resp => console.log(resp.rules))
        e.preventDefault();

    }

    useEffect(() => {
        setIsError(false)
    }, []);

    return <>
            <div className="header-card">
                <h2>Instantly Test If Your Websites Work With Assistive Tech</h2>
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </h3>
            </div>
            
            <div id="url-card">
                
                <Input handleChange={handleChange} handleSubmit={handleSubmit} />
                {isError ? 'Your url is not valid' : ''}
                {isLoading ? <Spinner /> : ''}
            </div>

            <div id="goal-card">
                <h3>How Does It Work?</h3>
                <p>We evaluate website's underlying code, generate a report and provide you with a solution guidelines. Let's Make it Accessible!</p>
                <div className="grid">
                    <div className="card">
                        <AnalyticsImg />
                        <p>Let us scan a web page and audit all its critical elements.</p>
                    </div>
                    <div className="card">
                        <CheckImg />
                        <p>See all existing bottlenecks, errors and issues.</p>
                    </div>
                    <div className="card">
                        <StatisticsImg />
                        <p>Get tips on how to improve your website's accessibility.</p>
                    </div>
                </div>
            </div>

            <div id="learn-more">
                <h3>Learn More About Our Platform</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a href="/about">LEARN MORE</a>
                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>

            <div id="contact-card">
                <h3>Have a Question or Suggestion? Send Us a Message</h3>
                <Form />
            </div>
        </>
};

export default Home;