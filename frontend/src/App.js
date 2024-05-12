import '../src/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import InicioPage from './pages/Inicio';
import EventosPage from './pages/Eventos';
import ServiciosPage from './pages/Servicios';
import ContactoPage from './pages/Contacto';

function App() {
  return (
    <div className="App">
      <Header/>

      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path='/' element={<InicioPage />} />
          <Route path='eventos' element={<EventosPage />} />
          <Route path='servicios' element={<ServiciosPage />} />
          <Route path='contacto' element={<ContactoPage />} />
        </Routes>
      </BrowserRouter>
      
      <Footer/>
    </div>
  );
}

export default App;
