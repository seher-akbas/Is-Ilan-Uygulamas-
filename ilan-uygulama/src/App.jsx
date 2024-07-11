import React from 'react'
import './App.css'
import IlanList from './components/IlanList'

function App() {
  return (
    <>
      <h1>İş İlan Portalı</h1>
      <div className='header'>
        <div className='arama_kutusu'>
          <input type="text" placeholder='İş ianı arayın' />
          <button id='arama_butonu'>Ara</button>
        </div>
      </div>
      <IlanList />
    </>
  )
}

export default App
