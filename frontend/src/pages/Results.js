import React from 'react';
import Input from '../components/urlInput/Input';
import Spinner from '../components/spinner/Spinner';
import Rule from '../components/rule/Rule';
import Form from '../components/form/Form';

const Results = ({ rules, handleSubmit, handleChange, isError, isLoading}) => {
    const passed = rules && rules.filter(r=> r.isPassed).length || 0;
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

            {rules && rules.length > 0 && <center>
                <div style={{color: 'green'}}>Passed: {passed}</div>
                <div style={{color: 'red'}}>Failed: {rules.length - passed}</div>
                
            </center>}
            {rules && rules.length > 0 && rules.map((r, i) => <Rule key={i} rule={r}/>)}
            <div style={{ padding: rules.length ? '20px 0' : '200px 0'}}>
            <h3 style={{ textAlign: 'center' }}>Have a Question or Suggestion? Send Us a Message</h3>
            <Form/>
            </div>
        </>
};

export default Results;