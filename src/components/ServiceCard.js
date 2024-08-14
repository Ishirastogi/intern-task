import React from 'react';

const ServiceCard = ({ title, duration, description, price }) => {
  return (
    <div className="border rounded-lg p-4 mb-4 flex justify-between items-start">
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{duration}</p>
        <p className="text-sm text-gray-500 mt-2">{description}</p>
      </div>
      <div className="flex flex-col items-end">
        <p className="text-lg font-bold">{price}</p>
        <button className="mt-2 p-1 bg-gray-200 rounded-full">+</button>
      </div>
    </div>
  );
};

export default ServiceCard;
