import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Cadastrar from "./pages/Cadastrar";
import Frases from "./pages/Frases";
import Atualizar from "./pages/Atualizar";

const App = () => {

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastrar" element={<Cadastrar />} />
        <Route path="/frases" element={<Frases/>} />
        <Route path="/atualizar/:id" element={<Atualizar/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;