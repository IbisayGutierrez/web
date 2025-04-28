import axios from "axios";

const API_KEY = "bfb31e4b";
const URL = "https://www.omdbapi.com/";

const MovieYear = async (year) => {
  try {
    const { data } = await axios.get(URL, {
      params: {
        s: "movie",
        y: year,
        type: "movie",
        apikey: API_KEY,
      },
    });
    if (data.Search) return data.Search;
    return [];
  } catch (error) {
    console.log("Error al cargar películas por año", error);
    return [];
  }
};

const MovieDetails = async (id) => {
  try {
    const { data } = await axios.get(URL, {
      params: {
        i: id,
        apikey: API_KEY,
      },
    });
    if (data.Response === "True") return data;
  } catch (error) {
    console.log("Error al cargar detalles de la película", error);
    throw error;
  }
};

const MovieTitle = async (title) => {
  try {
    const { data } = await axios.get(URL, {
      params: {
        s: title,
        type: "movie",
        apikey: API_KEY,
      },
    });
    if (data.Search) return data.Search;
    return [];
  } catch (error) {
    console.log("Error al cargar películas por título", error);
    return [];
  }
};

export {
  MovieYear,
  MovieDetails,
  MovieTitle
};