import "./App.css";
import { useState } from "react";
import CustomNav from "./components/CustomNav";
import CustomNowPlaying from "./components/CustomNowPlaying";
import Busqueda from "./pages/busqueda";
import Favoritos from "./pages/favoritos";
import Detalle from "./pages/detalle";
import CustomFooter from "./components/CustomFooter";

function App() {
  const [pagina, setPagina] = useState("home");
  const [detalleId, setDetalleId] = useState(null);
  const [origen, setOrigen] = useState("home");
  const [ultimaBusqueda, setUltimaBusqueda] = useState("");

  const navegar = (destino, id = null) => {
    if (destino === "detalle") setOrigen(pagina);
    setPagina(destino);
    if (id) setDetalleId(id);
  };

  return (
    <div>
      {pagina === "home" && (
        <>
          <CustomNav navegar={navegar} />
          <h2
            className="font-mono text-white text-4xl font-poppins font-semibold text-center mb-4 mt-4 textShadow"
          >
            Películas del Momento
          </h2>
          <CustomNowPlaying navegar={navegar} />
          <CustomFooter />
        </>
      )}
      {pagina === "busqueda" && (<Busqueda navegar={navegar} ultimaBusqueda={ultimaBusqueda} setUltimaBusqueda={setUltimaBusqueda} />)}
      {pagina === "favoritos" && <Favoritos navegar={navegar} />}
      {pagina === "detalle" && (<Detalle id={detalleId} origen={origen} navegar={navegar} />)}
    </div>
  );
}

export default App;