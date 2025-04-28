import { useState, useEffect } from "react";
import { addFavoritos, popFavoritos, estaEnFavoritos } from "../helpers/storage";

const CustomFavorite = ({ id }) => {
  const [isFavorito, setIsFavorito] = useState(false);

  useEffect(() => {
    setIsFavorito(estaEnFavoritos(id));
  }, [id]);

  const handleFavorito = () => {
    if (isFavorito) {
      popFavoritos(id);
    } else {
      addFavoritos({ imdbID: id });
    }
    setIsFavorito(!isFavorito);
  };

  return (
    <button
      onClick={handleFavorito}
      className={`px-4 py-2 rounded font-semibold transition-colors duration-300 text-white ${isFavorito ? "favorito" : "no-favorito"}`}
    >
      {isFavorito ? "Quitar de Favoritos" : "Agregar a Favoritos"}
    </button>
  );
};

export default CustomFavorite;