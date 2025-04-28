import React, { useState, useEffect } from "react";
import { validarTitulo, buscarPeliculas } from "../helpers/validar";
import CustomTab from "../components/CustomTabs";
import CustomBotton from "./CustomBotton";

function CustomSearch({ navegar, ultimaBusqueda, setUltimaBusqueda }) {
  const [error, setError] = useState("");
  const [movies, setMovies] = useState([]);
  const [titulo, setTitulo] = useState(ultimaBusqueda);

  useEffect(() => {
    if (ultimaBusqueda) {
      setTitulo(ultimaBusqueda);
      handleBusqueda(ultimaBusqueda);
    }
  }, [ultimaBusqueda]);

  const handleBusqueda = async (busquedaManual = null) => {
    const texto = busquedaManual ?? titulo;

    const error = validarTitulo(texto);
    if (error) {
      setError(error);
      return;
    }
    await buscarPeliculas(texto, setUltimaBusqueda, setError, setMovies);
  };

  return (
    <div>
      <h2
        className="font-bold text-white text-5xl text-shadow-lg text-center mb-12 textShadow">
        Buscador de Películas
      </h2>
      <input
        className="bg-[#629584] text-white text-xl font-semibold text-center p-2 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-800 w-full sm:w-150 mt-6 mx-auto"
        type="text"
        placeholder="Ingresa el título de la película"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />
      {error && <p className="text-red-500 text-center mt-2">{error}</p>}
      <CustomBotton
        signo="Buscar"
        fn={() => handleBusqueda()}
        className="bg-[#629584] text-white py-2 px-4 rounded-lg mt-2 mx-auto block"
      />
      {movies.length > 0 && <CustomTab movies={movies} navegar={navegar} />}
    </div>
  );
}

export default CustomSearch;
