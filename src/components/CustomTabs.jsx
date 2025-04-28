import React, { useState } from "react";
import CustomCard from "../components/CustomCard";
import CustomBotton from "../components/CustomBotton";

function CustomTab({ movies, navegar }) {
  const [Index, setIndex] = useState(0);
  const movie = movies[Index];

  const navegarDetalle = () => {
    navegar("detalle", movie.imdbID);
  };

  const descripcion = movie.Plot
    ? movie.Plot.split(" ").slice(0, 15).join(" ") +
    (movie.Plot.split(" ").length > 15 ? "..." : "")
    : "Descripción no disponible.";


  return (
    <div className="mt-10">
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {movies.map((movie, index) => (
          <CustomBotton
            key={movie.imdbID}
            signo={movie.Title}
            fn={() => setIndex(index)}
            className={`px-4 py-2 rounded-lg font-semibold ${Index === index
                ? "bg-gray-200 text-gray-700 hover:bg-gray-300"
                : "bg-[#135D66] text-white"
              }`}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <CustomCard
          key={movie.imdbID}
          title={movie.Title}
          image={movie.Poster}
          onClick={navegarDetalle}
          description={descripcion}
          option="Ver Más"
          type="search"
        />
      </div>
    </div>
  );
}

export default CustomTab;