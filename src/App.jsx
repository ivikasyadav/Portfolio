import Footer from './components/Footer';
import Header from './components/Navbar';
import Layout from './components/Layout';
import Home from './pages/Home';
import { Routes,Route } from 'react-router-dom';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
  return (
    <>
   <Routes>

      <Route path="/" element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/portfolio' element={<Portfolio/>}/>
      <Route path='/contact' element={<Contact/>}/>

   </Routes>
    </>
  );
}

export default App;
