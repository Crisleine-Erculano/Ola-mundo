import Rodape from "Componentes/Rodape";
import Menu from "./Componentes/Menu";
import Inicio from "./Paginas/inicio";
import SobreMim from "./Paginas/inicio/SobreMim";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/SobreMim" element={<SobreMim />} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  )



}

export default AppRoutes;
