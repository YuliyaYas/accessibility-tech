import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import './form.scss';

const Form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const location = useLocation();
    const [formSubmitted, setformSubmitted] = useState(false);

    Object.keys(errors).map(key => {
        document.getElementById(key).style.borderColor = '#e90e59;';
    })

    const onSubmit = async (data) => {
        // eslint-disable-next-line no-unused-vars
        let response;
        const formData = {
            "submittedAt": Date.now(),
            "fields": [
                { "name": "firstname", "value": data.firstname },
                { "name": "email_subject", "value": data.email_subject },
                { "name": "email", "value": data.email },
                { "name": "message", "value": data.message }
            ],
            "context": {
                "pageUri": location.pathname,
                "pageName": "Example page"
            }
        }

        try {
            //https://api.hsforms.com/submissions/v3/integration/submit/:portalId/:formGuid
            response = await fetch('https://api.hsforms.com/submissions/v3/integration/submit/8684991/bb9c4069-ced9-49c8-9d67-33144ee65048', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            setformSubmitted(true)
        } catch (e) {
            console.error("Hubspoot error - ", e);
            return e;
        }
    };

    return (
        <div>
            <center>
                {Object.keys(errors).length > 0 && <p style={{ color: '#e90e59;', fontSize: '14px' }}>Please fill in all required fields</p>}
                {!formSubmitted ?
                    <form onSubmit={handleSubmit(onSubmit)} id="contact-form">
                            <input type="text" id="firstname"
                            className="span-half"
                            name="firstname" placeholder='Your Name*'
                                {...register("firstname", {
                                    required: "Required",
                                })}
                            />
                            <input type="text" id="email" name="email" 
                            className="span-half"
                            placeholder="Email*"
                                {...register("email", {
                                    required: "Required",
                                })}
                            />
                        <input type="text" id="email_subject" name="email_subject" className="span-full" placeholder="Subject"
                            {...register("email_subject", {
                                required: "Required",
                            })}
                        />
                        <textarea rows="8" type="text" id="message" name="message" placeholder='Message*'
                            {...register("message", {
                                required: "Required",
                            })}
                        />
                        <button type="submit" className="submit-btn"><span>SUBMIT</span></button>
                    </form>
                    :
                    <div>
                        <h3 style={{ marginTop: '50px' }}>Thanks for submitting the form! <br />We'll get back to you as soon as we read the email.</h3>
                    </div>}
            </center>
        </div>
    );
}

export default Form;