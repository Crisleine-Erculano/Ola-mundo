import Rodape from "Componentes/Rodape";
import Menu from "./Componentes/Menu";
import Inicio from "./Paginas/inicio";
import SobreMim from "./Paginas/inicio/SobreMim";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginaPadrao from "Componentes/PaginaPadrao";
import Post from "Componentes/Post";
import NaoEncontrada from "Paginas/NaoEncontrada";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/SobreMim" element={<SobreMim />} />
          <Route path="post/:id" element= {<Post />} />
        </Route>
          <Route path="*" element={<NaoEncontrada />} />

      </Routes>
      <Rodape />
    </BrowserRouter>
  )



}

export default AppRoutes;
