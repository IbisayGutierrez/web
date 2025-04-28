import React from 'react';

function CustomFooter() {
  return (
    <footer>
      <div className="bg-[#387478] mt-4 text-white p-4 flex flex-col md:flex-row justify-between items-center font-semibold">
        <h1 className="text-3xl text-center md:text-left">
          <span className="text-cyan-950">Disfruta del </span>cine con nosotros
        </h1>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <p className="text-sm md:text-right">© 2025 PlayFlix. Todos los derechos reservados DIF.</p>
        </div>
      </div>
    </footer>
  );
}

export default CustomFooter;