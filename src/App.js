import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Home from './components/Home'; // Assuming Home contains the sections with IDs
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<PageNotFound />} />
            {/* Add other routes here if needed */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
