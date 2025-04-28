import { useEffect, useState } from "react";
import CustomCard from "./CustomCard";
import { MovieYear } from "../helpers/index";

export default function NowPlayingCards({ option = "Ver Detalles", navegar }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    MovieYear(new Date().getFullYear())
      .then(setMovies)
      .catch((error) => console.log(error))
  }, []);

  const navegarDetalle = id => navegar("detalle", id);

  return (
    <section className="p-4  min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map(movie => (
          <CustomCard
            key={movie.imdbID}
            title={movie.Title}
            image={movie.Poster}
            onClick={() => navegarDetalle(movie.imdbID)}
            description=""               
            option={option}
            type="home"
          />
        ))}
      </div>
    </section>
  );
}
