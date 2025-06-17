import React from 'react';

const Contact = () => (
  <section id="contact" className="py-20 bg-white text-center">
    <h2 className="text-3xl font-semibold text-gray-900">Get in Touch</h2>
    <p className="mt-2 text-gray-600">We’ll help you set up a plan that works for your team.</p>
    <form className="mt-8 max-w-xl mx-auto grid gap-4 text-left">
      <input type="text" placeholder="Your Name" className="border rounded px-4 py-3 w-full" required />
      <input type="email" placeholder="Your Email" className="border rounded px-4 py-3 w-full" required />
      <textarea placeholder="Your Message" rows={4} className="border rounded px-4 py-3 w-full" required />
      <button type="submit" className="bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition">
        Send Message
      </button>
    </form>
  </section>
);

export default Contact;
