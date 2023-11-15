import React from 'react'
import Home from './pages/Home'
import AnotherPage from './pages/AnotherPage';
import MinhaNavBar from './pages/MinhaNavBar'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';

export default function MinhasRotas() {
  return (
    <>
    <BrowserRouter>
      <MinhaNavBar />
      <Routes >
        <Route path="/" exact element={<Home />} />
        <Route path="/outra-pagina" element={<AnotherPage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}
