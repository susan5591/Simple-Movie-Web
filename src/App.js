import React,{useState} from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import WatchList from './pages/WatchList';
import DetailPage from './pages/DetailPage';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="watchlist" element={<WatchList />}/>
        <Route path=":id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
