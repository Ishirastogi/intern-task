import React from 'react';

const SummaryCard = ({ salon, services }) => {
  const total = services.reduce((acc, service) => acc + service.price, 0);

  return (
    <div className="bg-white border rounded-lg p-4 shadow-lg">
      <div className="flex items-center mb-4">
        <img src={salon.image} alt={salon.name} className="w-12 h-12 rounded-full mr-4" />
        <div>
          <h3 className="text-lg font-semibold">{salon.name}</h3>
          <p className="text-sm text-gray-500">{salon.rating} ★ ({salon.reviews} reviews)</p>
          <p className="text-sm text-gray-500">{salon.location}</p>
        </div>
      </div>
      <div className="mb-4">
        <p className="text-sm text-gray-500">No services selected</p>
      </div>
      <div className="border-t pt-4 h-screen">
        <div className="flex justify-between items-center">
          <p className="text-lg font-semibold">Total</p>
          <p className="text-lg font-semibold ">{total > 0 ? `$${total}` : 'free'}</p>
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;
