import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />

      </Routes>
    </div>
  );
}

export default App;
