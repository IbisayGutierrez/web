import { useEffect, useState } from 'react';
import { MovieDetails } from '../helpers/index';
import MovieInfo from '../components/CustumInfoMovie';

const Detalle = ({ id, navegar,origen }) => {
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    if (id) {
      MovieDetails(id)
        .then((data) => {
          setMovieDetails(data);
        })
        .catch((err) => console.error('Error al cargar detalles:', err));
    }
  }, [id]);

  if (!movieDetails) {
    return (
      <div className="flex justify-center items-center h-64 text-blue-950">
        <div className="rounded-full h-12 w-12 border-t-4 border-white"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex justify-center items-start pt-10 px-4">
      <div className="w-full max-w-6xl p-8 rounded shadow-lg text-white relative fondoDetalles">
        <div className="absolute top-2 left-7">
          <button onClick={() => navegar(origen)} className="px-4 py-2 rounded font-semibold transition-colors duration-300 text-white regresarDetalles">
            Regresar
          </button>
        </div>

        <div className="flex flex-col items-center mt-10">
          <MovieInfo movie={movieDetails} />
        </div>
      </div>
    </div>
  );
};

export default Detalle;