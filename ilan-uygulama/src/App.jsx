import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import IlanList from './components/IlanList';
import { filter, filterByCategory, filterByLocation, filterByCategoryAndLocation } from './features/filterSlice';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IlanDetay from './components/IlanDetay';
import IlanKartları, { is_ilanlari_veriler } from './components/IlanKartları';

function App() {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilter = () => {
    dispatch(filter(searchTerm));
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    dispatch(filterByCategoryAndLocation({ category: e.target.value, location: selectedLocation }));
  };

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
    dispatch(filterByCategoryAndLocation({ category: selectedCategory, location: e.target.value }));
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
      <div className='filtreleme_secenekleri'>
        <select name="" id="" onChange={handleCategoryChange} value={selectedCategory}>
          <option value="">Tüm Kategoriler</option>
          {Array.from(new Set(is_ilanlari_veriler.map(konum => konum.category))).map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>
        <select name="" id="" onChange={handleLocationChange} value={selectedLocation}>
          <option value="">Tüm Konumlar</option>
          {Array.from(new Set(is_ilanlari_veriler.map(konum => konum.location))).map((location, index) => (
            <option key={index} value={location}>{location}</option>
          ))}
        </select>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IlanList />} />
          <Route path="/kartlar" element={<IlanKartları />} />
          <Route path="/details" element={<IlanDetay />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
