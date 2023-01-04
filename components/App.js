import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './Nav.jsx'
import Home from './Home.jsx'
import Menu from './Menu.jsx'
import Signup from './Signup.jsx'
import Pagenotfound from './Pagenotfound.jsx'
const App1 = () => {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Pagenotfound />} />
          <Route />
          <Route />
          <Route />
        </Routes>
      </Router>
    </div>
  );
}

export default App1