import React from 'react';
import Input from '../components/urlInput/Input';
import Spinner from '../components/spinner/Spinner';
import './home.scss';
import { ReactComponent as AnalyticsImg } from '../assets/svgs/analytics.svg';
import { ReactComponent as CheckImg } from '../assets/svgs/check.svg';
import { ReactComponent as StatisticsImg } from '../assets/svgs/statistics.svg';
import Form from '../components/form/Form';
import Rule from '../components/rule/Rule';

const Home = ({ rules, handleSubmit, handleChange, isError, isLoading, webImg }) => {
    const passed = rules.filter(r => r.isPassed);
    const failed = rules.filter(r => !r.isPassed);

    return <>
        <div className="header-card">
            <h2>Instantly Test If Your Websites Work With Assistive Tech</h2>
            <h3>A quick and insightful way to test your site's accessibility</h3>
        </div>

        <div id="url-card">
            <Input handleChange={handleChange} handleSubmit={handleSubmit} />
            {isError ? 'Your url is not valid. Examples of valid urls: https://www.goodurl.com, https://goodurl.com' : ''}
            {isLoading ? <Spinner /> : ''}
        </div>
        <div className="rule-results">
            {webImg && <img id="web-img" src={'data:image/jpeg;base64,' + Buffer.from(webImg).toString('base64')} />}
            {rules.length > 0 && <center className="rules-passed">
                <div style={{ color: 'green' }}>Passed: {passed.length || 0}</div>
                <div style={{ color: 'red' }}>Failed: {failed.length || 0}</div>
            </center>}
        </div>

        {rules.length > 0 && failed.map((r, i) => <Rule key={i} rule={r} />)}
            {rules.length > 0 && passed.map((r, i) => <Rule key={i} rule={r} />)}
        {!rules.length && <div id="goal-card">
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
        </div>}

        {!rules.length && <div id="learn-more">
            <h3>Learn More About Our Platform</h3>
            <p className="description">Over 1 billion people are estimated to live with some form of disability by the World Health Organization. This corresponds to about 15% of the world's population. We hope that our tool can help websites become more accessible to accommodate people in need.</p>
            <a href="/about">LEARN MORE</a>
            
        </div>}

        <div id="contact-card">
            <h3>Have a Question or Suggestion? Send Us a Message</h3>
            <Form />
        </div>
    </>
};

export default Home;