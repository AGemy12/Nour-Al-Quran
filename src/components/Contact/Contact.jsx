import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Input } from '../../othercomponents/index';
import { Message } from '../../othercomponents/index';
import { useTranslation } from 'react-i18next';
import './Contact.css';

function Contact() {
    const [t] = useTranslation();
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_c2lg4sk', 
            'template_9kblxj3', 
            form.current, 
            'YpQSxGtzz2bm73j3B')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    };
    return(
        <div className="contact">
            <div className="heading-sections">
                <h2 className='contact-head'> {t('email us to get your free trial experience')} </h2>
            </div>
            <form ref={form} onSubmit={sendEmail} className='contact-form' action="form">
                    <Input class='form-field-input' title={t('your name')} type = 'text' name='name' />
                    <Input class='form-field-input' title={t('your email')} type = 'email' name='email' />
                    <Input class='form-field-input' title={t('your phone')} type = 'number' name='phone' />
                    <Input class='form-field-input' title={t('your age')} type = 'number' name='age' />
                    <Input class='form-field-input' title={t('your country')} type = 'text' name='country'/>
                    <Message name ='message'/>
                    <Input class='form-field-submit' type = 'submit' value={t('SEND')} />
                </form>
        </div>
    )
}

export default Contact;