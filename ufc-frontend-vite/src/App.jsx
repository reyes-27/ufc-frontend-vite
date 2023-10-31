import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import EventDetail from './pages/EventDetail';
import HomePage from './pages/HomePage';

function App() {

  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />}></Route>
            <Route path="event" element={<EventDetail />}></Route>
          </Route>
        </Routes>
      </BrowserRouter> */}
    </>
  )
}

export default App
