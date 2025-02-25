<<<<<<< Updated upstream
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import './App.css'
import ListaFuncionarios from './components/funcionarios/listarfuncionarios/ListarFuncionarios'
=======
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import "./App.css";
import Sobre from "./pages/sobre/Sobre";
>>>>>>> Stashed changes

function App() {
  return (
    <>
<<<<<<< Updated upstream
        <BrowserRouter>
          <Navbar />
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/funcionarios" element={<ListaFuncionarios />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
=======
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
>>>>>>> Stashed changes
    </>
  );
}

export default App;
