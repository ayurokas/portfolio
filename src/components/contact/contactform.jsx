import React, { useState } from 'react';
import './contactform.css';
import emailjs from 'emailjs-com';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const templateParams = {
            from_name: name,
            from_email: email,
            message: message,
        };

        emailjs.send('service_8gqnou7', 'template_n7egvri', templateParams, 'W2KuVmIyTNoXh9FPZ')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setSubmitted(true);
            }, (error) => {
                console.log('FAILED...', error);
            });

        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="contact-form-container">
            {submitted ? (
                <div className="thank-you-message">Merci pour votre message!</div>
            ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Nom</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="submit-button">Envoyer</button>
                </form>
            )}
        </div>
    );
};

export default ContactForm;