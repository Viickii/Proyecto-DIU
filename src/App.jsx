import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/home';
import Carreras from './views/carreras';
import Aranceles from './views/aranceles';
import BecasBeneficios from './views/becas-beneficios';
import NavBar from './components/navbar';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/carreras" element={<Carreras />} />
            <Route path="/aranceles" element={<Aranceles />} />
            <Route path="/becas-beneficios" element={<BecasBeneficios />} /> 
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
