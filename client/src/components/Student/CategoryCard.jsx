import React from 'react'

const CategoryCard = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-xl shadow-sm hover:shadow-lg transition duration-300 text-center hover:scale-105">
      <div className="text-4xl text-blue-600 mb-4 flex justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default CategoryCard;