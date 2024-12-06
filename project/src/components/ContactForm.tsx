import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: '',
    budget: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      phone: '',
      propertyType: '',
      budget: '',
      message: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative">
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="peer w-full px-4 py-3 rounded-lg border border-gray-300 placeholder-transparent focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            placeholder="Name"
          />
          <label
            htmlFor="name"
            className="absolute left-4 -top-2.5 bg-white px-1 text-sm text-gray-600 transition-all 
                     peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 
                     peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600"
          >
            Name *
          </label>
        </div>

        <div className="relative">
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="peer w-full px-4 py-3 rounded-lg border border-gray-300 placeholder-transparent focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            placeholder="Email"
          />
          <label
            htmlFor="email"
            className="absolute left-4 -top-2.5 bg-white px-1 text-sm text-gray-600 transition-all 
                     peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 
                     peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600"
          >
            Email *
          </label>
        </div>

        <div className="relative">
          <input
            type="tel"
            id="phone"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="peer w-full px-4 py-3 rounded-lg border border-gray-300 placeholder-transparent focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            placeholder="Phone"
          />
          <label
            htmlFor="phone"
            className="absolute left-4 -top-2.5 bg-white px-1 text-sm text-gray-600 transition-all 
                     peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 
                     peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600"
          >
            Phone Number *
          </label>
        </div>

        <div className="relative">
          <select
            id="propertyType"
            value={formData.propertyType}
            onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
            className="peer w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 appearance-none bg-white"
          >
            <option value="">Select...</option>
            <option value="1BHK">1 BHK</option>
            <option value="2BHK">2 BHK</option>
            <option value="3BHK">3 BHK</option>
            <option value="4BHK">4+ BHK</option>
            <option value="Villa">Villa</option>
            <option value="Plot">Plot</option>
          </select>
          <label
            htmlFor="propertyType"
            className="absolute left-4 -top-2.5 bg-white px-1 text-sm text-gray-600"
          >
            Property Type
          </label>
          <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
            <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        <div className="relative">
          <select
            id="budget"
            value={formData.budget}
            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
            className="peer w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 appearance-none bg-white"
          >
            <option value="">Select...</option>
            <option value="0-50L">Under ₹50 Lakhs</option>
            <option value="50L-1Cr">₹50 Lakhs - 1 Crore</option>
            <option value="1Cr-2Cr">₹1 Crore - 2 Crore</option>
            <option value="2Cr+">Above ₹2 Crore</option>
          </select>
          <label
            htmlFor="budget"
            className="absolute left-4 -top-2.5 bg-white px-1 text-sm text-gray-600"
          >
            Budget Range
          </label>
          <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
            <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      <div className="relative">
        <textarea
          id="message"
          required
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="peer w-full px-4 py-3 rounded-lg border border-gray-300 placeholder-transparent focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 resize-none"
          placeholder="Message"
        ></textarea>
        <label
          htmlFor="message"
          className="absolute left-4 -top-2.5 bg-white px-1 text-sm text-gray-600 transition-all 
                   peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 
                   peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600"
        >
          Your Requirements *
        </label>
      </div>

      <button
        type="submit"
        className="w-full flex items-center justify-center space-x-2 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 
                 transition-colors duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        <Send className="h-5 w-5" />
        <span>Send Message</span>
      </button>
    </form>
  );
};

export default ContactForm;