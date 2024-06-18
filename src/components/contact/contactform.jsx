import React, { useState } from 'react';
import './contactform.css';
import { sendContactForm } from '../../utils/apifetch';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = { name, email, message };

        try {
            await sendContactForm(formData);
            setSubmitted(true);
        } catch (error) {
            alert('Une erreur est survenue. Veuillez réessayer.');
        }
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
