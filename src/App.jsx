import './App.css';
import {Route, Routes } from 'react-router-dom';
import Home from '../views/Home';
import Pokemones from '../views/Pokemones';
import Navegacion from '../components/Navegacion';

function App() {

  return (
    <>
      <Navegacion />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemones/:id" element={<Pokemones />} />
      </Routes>
    </>
  );
}

export default App;
