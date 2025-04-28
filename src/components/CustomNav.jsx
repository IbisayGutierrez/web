import React from 'react';
import CustomBotton from './CustomBotton';

function CustomNav({ navegar }) {
  const handleBuscar = () => {
    navegar("busqueda");
  };

  const handleFav = () => {
    navegar("favoritos");
  };

  return (
    <nav className="bg-[#387478] text-white p-4 flex justify-between items-center text-shadow-lg font-semibold -mt-4">
      <h1 className="text-5xl font-bold transition duration-300 ease-in-out hover:drop-shadow-[0_5px_5px_rgba(0,0,0,0.7)] textShadow">
        <span className="text-cyan-950">Play</span><span className="text-white">Flix</span>
      </h1>

      <div className="font-bold text-xl text-shadow-lg flex space-x-4 textShadow cursor-pointer">
        <CustomBotton
          signo="Buscar"
          fn={handleBuscar}
          className="font-bold text-xl bg-[#387478] text-shadow-lg text-white py-2 px-4 rounded cursor-pointer transition-colors duration-300 textShadow"
        />
        
        <CustomBotton
          signo="Favoritos"
          fn={handleFav}
          className="font-bold text-xl bg-[#387478] text-shadow-lg text-white py-2 px-4 rounded cursor-pointer transition-colors duration-300 textShadow"
        />
      </div>
    </nav>
  );
}

export default CustomNav;