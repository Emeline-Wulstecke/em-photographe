import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

// Import pages
import Home from './pages/Home/Home';
import Admin from './pages/Admin/Admin';
import Error from './pages/Error/Error';
import Couple from './pages/Couple/Couple';
import Family from './pages/Family/Family';
import Pregnancy from './pages/Pregnancy/Pregnancy';

// Import components
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Scroll from './components/Scroll/Scroll';


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/couple" element={<Couple />} />
        <Route path="/family" element={<Family />} />
        <Route path="/pregnancy" element={<Pregnancy />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Scroll />
      <Footer />
    </BrowserRouter>
  );
}

export default App;








