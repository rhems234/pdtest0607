import logo from './logo.svg';
import './App.css';
import { useCallback, useState } from 'react';
import {Route, Routes} from 'react-router-dom';
import ItemsPage from './pages/ItemsPage';

function App() {

  return (
    <Routes>
      <Route path="/" element={<ItemsPage/>}/>
      <Route path="/:category" element={<ItemsPage/>}/>
    </Routes>
  );
}

export default App;
