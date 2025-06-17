import React from 'react';

const features = [
  { title: 'Flexible Plans', description: 'Customizable benefits for companies of all sizes.' },
  { title: 'Real-time Insights', description: 'Track engagement and costs as they happen.' },
  { title: 'Simple Onboarding', description: 'Get up and running in under a day.' },
];

const Features = () => (
  <section id="features" className="py-20 bg-white text-center">
    <h2 className="text-3xl font-semibold text-gray-900">Why Teams Choose Us</h2>
    <div className="mt-10 grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
      {features.map((f) => (
        <div key={f.title} className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-bold">{f.title}</h3>
          <p className="mt-2 text-gray-600">{f.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Features;
