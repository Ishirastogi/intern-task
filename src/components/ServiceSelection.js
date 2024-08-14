import React, { useState } from 'react';
import ServiceCard from './ServiceCard';
import CategoryTab from './CategoryTab';
import SummaryCard from './SummaryCard';

const ServiceSelection = () => {
  const categories = ['Featured', 'Haircutting', 'Styling', 'Color Services', 'Natural Hairstyling', 'Relaxer/ Texturize'];
  const [selectedCategory, setSelectedCategory] = useState('Featured');

  const salon = {
    name: 'H2 Salon Brooklyn',
    rating: 4.9,
    reviews: '4,106',
    location: 'Brooklyn, Stuyvesant Heights, NY',
    image: 'https://t4.ftcdn.net/jpg/01/81/61/29/360_F_181612908_uiOH8a4qWiNGuGS2Pg5dgwUIKJZ0C02w.jpg', // Replace with actual image URL
  };

  const services = [
    {
      title: 'Haircut',
      duration: '1 hr, 30 mins - 2 hrs',
      description: 'All haircuts are full services that include a wash and style; either a wash...',
      price: 90,
    },
    {
      title: 'Deep Condition (Standard)',
      duration: '15 mins',
      description: 'This is an add on deep conditioning treatment service for clients who need...',
      price: 25,
    },
    {
      title: 'Blow Dry/Silk Press',
      duration: '1hr-2hrs',
      description: 'Please do not apply castor oil or coconut oil to...',
      price: 25,
    },
    {
      title: 'Root Touch Up(Single Process)',
      duration: '1hr',
      description: 'For RETURNING clients, and anyone needing a root touch up...',
      price: 25,
    },
    {
      title: 'Wash & Go-Curly Style',
      duration: '1hr,25mins',
      price: 25,
    },
    {
      title: 'Haircut Short Tapered',
      duration: '1hr-2hrs',
      description: 'A taper is a cut that leaves your hair long at the top...',
      price: 25,
    }

    // Add more services as needed
  ];

  return (
    <div className="max-w-7xl mx-auto p-4 grid grid-cols-3 gap-8">
      <div className="col-span-2">
        <h1 className="text-4xl font-bold mb-4">Select services</h1>
        <CategoryTab
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <h2 className="text-xl font-semibold mb-4">Featured</h2>
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
      <div className="sticky top-4 h-full">
        <SummaryCard salon={salon} services={[]} />
      </div>
    </div>
  );
};

export default ServiceSelection;
