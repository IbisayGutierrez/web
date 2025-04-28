const FAVORITOS = "peliculas_favoritas";

export const getFavoritos = () => {
  const favoritosGuardados = localStorage.getItem(FAVORITOS);
  return favoritosGuardados ? JSON.parse(favoritosGuardados) : [];
};

export const addFavoritos = (pelicula) => {
  const id = pelicula.imdbID || pelicula.id;
  if (!id) return;

  const favoritos = getFavoritos();
  if (!favoritos.includes(id)) {
    favoritos.push(id);
    localStorage.setItem(FAVORITOS, JSON.stringify(favoritos));
  }
};

export const popFavoritos = (id) => {
  const favoritos = getFavoritos().filter(favId => favId !== id);
  localStorage.setItem(FAVORITOS, JSON.stringify(favoritos));
};

export const estaEnFavoritos = (id) => {
  return getFavoritos().includes(id);
};