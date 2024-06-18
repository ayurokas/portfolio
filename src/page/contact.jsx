import React from 'react';
import GlitchText from '../components/glicht/glicht';
import ContactInfoPopup from '../components/popup/popupcontact';
import SocialMediaPopup from '../components/popup/popupsocial';
import ContactForm from '../components/contact/contactform';

function ContactPage() {
    return (
        <div className="container my-5 text-center">
            <GlitchText text="CONTACTEZ-MOI" />
            <div className="row mt-4">
                <div className="col">
                    <ContactInfoPopup />
                    <SocialMediaPopup />
                </div>
            </div>
            <div className="row mt-4">
                <div className="col">
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}

export default ContactPage;
