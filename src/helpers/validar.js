import { MovieTitle, MovieDetails } from "./index";

export const validarTitulo = (titulo) => {
    const caracteresNoPermitidos = /[!@#$%^&*()_":,=+'?|~-]/;

    if (titulo.trim() === "") {
        return "Ingrese un título de película válido.";
    }
    if (titulo.trim().length <= 2) {
        return "El título debe tener más de 2 caracteres";
    }
    if (caracteresNoPermitidos.test(titulo)) {
        return "El título contiene caracteres no permitidos";
    }
    return null;
};

export const buscarPeliculas = async (titulo,setUltimaBusqueda,setError,setMovies) => {
    setUltimaBusqueda(titulo);
    setError("");
    setMovies([]);

    try {
        const resultadosBasicos = await MovieTitle(titulo);
        if (!resultadosBasicos || resultadosBasicos.length === 0) {
            setError("Película no encontrada");
            return;
        }
        const resultado = [];
        for (const movie of resultadosBasicos) {
            try {
                const info = await MovieDetails(movie.imdbID);
                if (info) {
                    resultado.push(info);
                }
            } catch {
                setError("Falló")
            }
        }
        setMovies(resultado);
    } catch {
        setError("Hubo un problema al buscar las películas.");
    }
};