import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Dummy from './Dummy';
import Navigation from './Navigation';
import PrimarySearchAppBar from './PrimarySearchAppBar';
import UsersTable from './Users';
import SearchBar from './SearchBar';

function App() {
  return (
    <>
    <PrimarySearchAppBar />
    
 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Dummy" element={<Dummy />} />
      <Route path="/Navigation" element={<Navigation />}/>
      <Route path="/Users" element={<UsersTable />}/>

    </Routes>

    </>
  );
}

export default App;
