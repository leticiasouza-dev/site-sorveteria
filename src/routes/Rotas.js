import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PaginaHome from '../pages/PaginaHome/index.js';
import PaginaSabores from '../pages/PaginaSabores';
import PaginaSobre from '../pages/PaginaSobre';

const Rotas = () =>(
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<PaginaHome />}/>
            <Route path='/sabores' element={<PaginaSabores />}/>
            <Route path='/sobre' element={<PaginaSobre />}/>
        </Routes>
    </BrowserRouter>
);

export default Rotas;
