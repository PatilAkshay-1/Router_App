import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Dummy from './Dummy';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Dummy" element={<Dummy />} />
    </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;
