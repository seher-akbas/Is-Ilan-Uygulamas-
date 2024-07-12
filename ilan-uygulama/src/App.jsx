import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.css'
import IlanList from './components/IlanList'
import { filter } from './features/filterSlice';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IlanDetay from './components/IlanDetay';
import IlanKartları from './components/IlanKartları';

function App() {

  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    console.log(e.target.value)
    setSearchTerm(e.target.value);
  };

  const handleFilter = () => {
    dispatch(filter(searchTerm));
  };
  return (
    <>
      <h1>İş İlan Portalı</h1>
      <div className='header'>
        <div className='arama_kutusu'>
          <input type="text" placeholder='İş ilanı arayın' value={searchTerm} onChange={handleChange} />
          <button id='arama_butonu' onClick={handleFilter}>Ara</button>
        </div>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IlanList />} />
          <Route path="/kartlar" element={<IlanKartları />} />
          <Route path="/details" element={<IlanDetay />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
