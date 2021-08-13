import React from 'react';
import './about.scss';
import Form from '../form/Form';

const About = () => {
    return (
        <div id="about">
            <h3>Accessibility shouldn’t have to be a challenge.</h3>
            <p>We emphasize on opportunities to improve the accessibility of your web app. We do not simply score your site's accessibility, we display elements that are not compliant with Web Content Accessibility Guidelines (WCAG) and provide information on how to improve the legibility of your content.</p>

            <p>The World Wide Web Consortium (W3C) develops web standards such as HTML, CSS. WCAG is developed through the W3C process in cooperation with individuals and organizations around the world, with a goal of providing a single shared standard for web content accessibility that meets the needs of individuals, organizations, and governments internationally. (excerpt from <a href="https://www.w3.org/WAI/standards-guidelines/wcag/" target="_blank">here</a>)</p>
            <p>It was difficult to find a tool that simply shows how accessible site is and provides concise feedback on how to act upon the improvement - that's why this tool was born. It was difficult to find something that would directly show you results after a quick scan without any extra steps or pointless scores.</p>
            <p className="card-popup">With Accessibility Report, you can evaluate the accessibility of your website and quickly determine your next steps. Our tool works with single page applications as well as traditional web apps.</p>

            <p>According to World Health Organization - people with disability experience poorer health outcomes, have less access to education and work opportunities, and are more likely to live in poverty than those without a disability. By simply making your site more accessible - you may help someone to reach their full potential. </p>


            <p> Currently out site is in a beta version, we are constantly adding more tests and rules. We implemented only a subset of accessibility issues that can be automatically detected. If you have any feedback - we welcome it with open arms!
            </p>
            <div id="contact-card" style={{margin: '0px 0'}}>
                <h3>Send Us Your Feedback</h3>
                <Form />
            </div>

            <p >We do not share user data with 3rd parties and does not collect any personally identifiable information.</p>
        </div>
    )
}

export default About