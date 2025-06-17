import React from 'react';

const faqs = [
  {
    question: 'How do we sign up?',
    answer: 'Just fill out the form at the bottom and we’ll contact you to set up a demo.',
  },
  {
    question: 'Can we change plans later?',
    answer: 'Yes! You can switch plans or customize your offerings anytime.',
  },
];

const FAQ = () => (
  <section id="faq" className="py-20 bg-gray-50 text-center">
    <h2 className="text-3xl font-semibold text-gray-900">FAQs</h2>
    <div className="mt-10 max-w-3xl mx-auto space-y-6 text-left">
      {faqs.map((faq, idx) => (
        <div key={idx}>
          <h3 className="font-bold text-lg">{faq.question}</h3>
          <p className="text-gray-700 mt-1">{faq.answer}</p>
        </div>
      ))}
    </div>
  </section>
);

export default FAQ;
