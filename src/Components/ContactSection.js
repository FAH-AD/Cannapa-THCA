import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Socials from './Socials';

const ContactSection = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState('');

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    const serviceID = 'service_qlaa7lq';
    const templateID = 'template_i2kr0x3';
    const userID = 'w1vfjNWdoMuKLs_AQ';

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    emailjs.send(serviceID, templateID, templateParams, userID)
      .then((result) => {
        setIsSending(false);
        setIsSent(true);
        setError('');
        setFormData({ name: '', email: '', phone: '', message: '' });
      }, (error) => {
        setIsSending(false);
        setError('Failed to send message. Please try again.');
      });
  };

  return (
    <div className="flex w-[90%] mx-auto gap-4 text-left flex-col md:flex-row p-8">
      {/* Left Side */}
      <div className="md:w-1/3 p-4">
        <h2 className="text-2xl font-bold mb-4">Contact Details</h2>
        <p className="mb-4">
        Located in downtown Raleigh, Cannapa is a haven for cannabis aficionados and enthusiasts, providing an unparalleled array of premium THCa flower, expertly produced live rosin, convenient disposables, and delicious edibles. Our dispensary ensures your journey is enhanced with the highest quality, potency, and flavor-packed cannabis offerings available today.
        </p>
        <div className='mt-4 text-sky-500'>
          <p className='text-[1.3rem] font-bold mt-8'>1606 N Market drive Suite F</p>
          <p className='text-[1.3rem] font-bold mt-4'>Raleigh, NC 27609</p>
          <p className='text-[1.7rem] font-bold mt-6'>+1 919-615-0389</p>
        </div>
        <div className='mt-6'>
          <p className='text-[1.6rem] font-bold mb-4'>Connect With Us</p>
          <Socials />
        </div>
      </div>

      {/* Right Side */}
      <div className="md:w-2/3 p-4">
        <h2 className="text-2xl font-bold mb-4">LET’S GET IN TOUCH</h2>
        <p className="mb-4 font-bold">Got a question or need assistance? We're here to help!</p>
        <ul className='list-disc w-[90%] mx-auto'>
          <li><span className='font-bold'>Email Us: </span> info@cannapathca.com</li>
          <li><span className='font-bold'>Call Us: </span> +1 919-615-0389</li>
        </ul>
        <p className="my-8">Feel free to reach out with any inquiries or support you require. We look forward to connecting with you!</p>
        <form onSubmit={handleSubmit} className="space-y-4 mt-8">
          <div>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder='Your Name'
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <input
              type="email"
              id="email"
              name="email"
              placeholder='Your Email'
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder='Your Phone'
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <textarea
              id="message"
              name="message"
              placeholder='Your Message'
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              rows="4"
              required
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-gray-500 text-white p-2 rounded hover:bg-black max-w-[170px] transition-colors duration-300"
              disabled={isSending}
            >
              {isSending ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
        {isSent && <p className="text-green-500 mt-4">Message sent successfully!</p>}
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>
    </div>
  );
};

export default ContactSection;
