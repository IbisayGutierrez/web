import React from "react";
import CustomButton from "../components/CustomBotton";
import CustomSearch from "../components/CustomSearch";

function Busqueda({ navegar, ultimaBusqueda, setUltimaBusqueda }) {
  const handleRegresar = () => {
    setUltimaBusqueda("");
    navegar("home");
  };

  return (
    <div>
      <CustomButton signo="Regresar" fn={handleRegresar} className="relative -top-8 -left-6 flex items-center justify-center font-bold text-white text-2xl bg-[#629584]rounded-full textShadow"/>
      <CustomSearch
        navegar={navegar}
        ultimaBusqueda={ultimaBusqueda}
        setUltimaBusqueda={setUltimaBusqueda}
      />
    </div>
  );
}

export default Busqueda;