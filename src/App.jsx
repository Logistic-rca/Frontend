import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Services from './Components/Services';
import SignUp from './pages/SignUp';
const MainLayout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <>
      {isHomePage && <Navbar />}
      <Routes>
        {isHomePage && <Route path="/" element={<><Home /><Services /></>} />}
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
};

const App = () => (
  <Router>
    <MainLayout />
  </Router>
);

export default App;
