import React, {useEffect} from 'react';
import './about.scss';
import Form from '../form/Form';

const About = () => {

    useEffect(()=>{
        if(document && document.querySelector("meta[name='Accessibility Scanner']")){
            document.querySelector("meta[name='Accessibility Scanner']").content='With Accessibility Report, you can evaluate the accessibility of your website and quickly determine your next steps. Our tool works with single page applications (React/Angular/etc.) as well as traditional web apps.'
        }
    }, []);

    return (
        <div id="about">
            <h3>Accessibility shouldn’t be a challenge.</h3>
            <p>Accessibility Report is a free tool to assess the accessibility of your web app. It displays elements that are not compliant with accessibility best practices and provides information on how to improve the legibility of your content.</p>

            <p>Accessibility Report uses the Web Content Accessibility Guidelines (WCAG). WCAG is developed through W3C (similar to the HTML and CSS standards). It is built in cooperation with individuals and organizations around the world, with a goal of providing a single shared standard for web content accessibility that meets the needs of individuals, organizations, and governments internationally. <span className="citation">[1]</span></p>
            
            <p className="card-popup">With Accessibility Report, you can evaluate the accessibility of your website and quickly determine your next steps. Our tool works with single page applications (React/Angular/etc.) as well as traditional web apps.</p>

            <p>Given the significance of the internet, web accessibility is of critical importance to people with disabilities around the world. We hope to remove the barriers in a standardized way for people with need of assistive technologies to interact with the web. Providing accessible content can also benefit people who are experiencing circumstantial barriers. </p>

            <p> We are constantly growing our accessibility rule database with new ways to make web content more accessible. With the Accessibility Report you can uncover your site’s most prevalent WCAG violations, which will lead to making your site accessible to people with disabilities and will increase customer satisfaction.
            </p>
            <div id="contact-card" style={{margin: '0px 0'}}>
                <h3>Send Us Your Feedback</h3>
                <Form />
            </div>
            <div style={{margin: '50px 0'}}><span className="citation">[1]</span> - excerpt from <a href="https://www.w3.org/WAI/standards-guidelines/wcag/" target="_blank">the WAI standards guidelines</a></div>
            {/* <p >We do not share user data with 3rd parties and does not collect any personally identifiable information.</p> */}
        </div>
    )
}

export default About