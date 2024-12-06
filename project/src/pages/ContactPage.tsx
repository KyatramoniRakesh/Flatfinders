import React from 'react';
import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';

const ContactPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Get in Touch</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Have questions about finding your dream property? We're here to help! Reach out to us through any of the following channels.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-white rounded-lg shadow-md p-6 lg:p-8">
          <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
          <ContactForm />
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 lg:p-8">
          <ContactInfo />
        </div>
      </div>

      <div className="mt-12">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-6">Visit Our Office</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2967147073137!2d78.34853151487756!3d17.44543788804592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93dc8c5d69df%3A0x19688beb557a7c86!2sGachibowli%2C%20Hyderabad%2C%20Telangana%2C%20India!5e0!3m2!1sen!2sin!4v1647834756812!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;