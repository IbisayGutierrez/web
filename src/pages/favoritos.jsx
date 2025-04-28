import { useEffect, useState } from "react";
import { getFavoritos, popFavoritos } from "../helpers/storage";
import { MovieDetails } from "../helpers/index";
import CustomCard from "../components/CustomCard";
import CustomButton from "../components/CustomBotton";
import CustomFooter from "../components/CustomFooter";

export default function Favoritos({ navegar }) {
  const [peliculas, setPeliculas] = useState([]);

  const cargarPeliculas = () => {
    const favoritosIds = getFavoritos();
    const detalles = [];

    favoritosIds.forEach((id) => {
      MovieDetails(id)
        .then((data) => {
          if (data) {
            detalles.push(data);
            setPeliculas([...detalles]);
          }
        })
        .catch((err) => {
          console.error("Error cargando película:", id, err);
        });
    });
  };

  useEffect(() => {
    cargarPeliculas();
  }, []);

  const handleRegresar = () => {
    navegar("home");
  };

  const eliminarDeFavoritos = (id) => {
    popFavoritos(id);
    setPeliculas(prev => prev.filter(peli => peli.imdbID !== id));
  };

  return (
    <section className="p-4 bg-[linear-gradient(135deg,_#001C30,_#176B87,_#64CCC5)] min-h-screen">
      <CustomButton signo="Regresar" fn={handleRegresar} />
      <h2 className="font-mono text-white text-4xl font-poppins font-semibold text-center mb-4 mt-4 textShadow">Favoritos</h2>

      {peliculas.length === 0 ? (
        <p className="text-center text-white text-lg mt-10">No hay películas en favoritos.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {peliculas.map((movie) => (
            <CustomCard
              key={movie.imdbID}
              title={movie.Title}
              image={movie.Poster}
              onClick={() => eliminarDeFavoritos(movie.imdbID)}
              description={movie.Plot?.split(" ").slice(0, 10).join(" ") +
                (movie.Plot?.split(" ").length > 10 ? "..." : "")}
              option="Quitar de Favoritos"
              type="search"
            />
          ))}
        </div>
      )}

      <CustomFooter />
    </section>
  );
}