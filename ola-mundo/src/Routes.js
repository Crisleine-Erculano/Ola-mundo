import Rodape from "Componentes/Rodape";
import Menu from "./Componentes/Menu";
import Inicio from "./Paginas/inicio";
import SobreMim from "./Paginas/inicio/SobreMim";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginaPadrao from "Componentes/PaginaPadrao";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path= "/" element={<PaginaPadrao />}>
        <Route path="/" element={<Inicio />} />
        <Route path="/SobreMim" element={<SobreMim />} />
        </Route>
        
      </Routes>
      <Rodape />
    </BrowserRouter>
  )



}

export default AppRoutes;
