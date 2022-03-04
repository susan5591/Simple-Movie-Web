import React,{useState} from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import WatchList from './pages/WatchList';
import DetailPage from './pages/DetailPage';
import Cast from './components/Cast';
import Detail from './components/Detail';
import { AppContext } from './context';
import {data} from './data'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <AppContext.Provider value={data}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="watchlist" element={<WatchList />}/>
          <Route path=":id" element={<DetailPage />} />
          {/* <Route path=":id/details" element={<Detail />} /> */}
          {/* <Route path=":id/cast" element={<Cast />} /> */}
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>  
  )
}

export default App;
