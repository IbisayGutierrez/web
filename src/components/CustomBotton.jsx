import React from 'react';

function CustomBotton({ signo, fn, className = "" }) {
  return (
    <button
      type="button"
      className={`relative flex items-center justify-center font-bold text-white text-2xl bg-[#629584]rounded-full textShadow ${className}`}
      onClick={fn}
    >
      {signo}
    </button>
  );
}

export default CustomBotton;