import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';
import Footer from './Pages/Shared/Footer';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
