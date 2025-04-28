import React from 'react';

function CustomCard({ title, image, description, option, onClick, type = "home" }) {
  return (
    <div className="bg-[#135D66] rounded-lg p-2 shadow-lg flex flex-col items-center text-center shadow-black/40 hover:shadow-2xl hover:shadow-black/60 transition-shadow duration-300 border border-gray-300 w-full max-w-[16rem] text-white text-sm">
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover rounded-lg mb-6 hover:scale-110 transition-transform duration-300"
      />
      <h2 className="text-xl font-semibold mb-3 hover:text-gray-200 textShadow">
        {title}
      </h2>
      {type === 'search' && (
        <p className="text-sm mb-3 text-white">{description}</p>
      )}
      <button
        onClick={onClick}
        className="text-white hover:text-gray-200 text-sm font-semibold"
      >
        {option}
      </button>
    </div>
  );
}

export default CustomCard;