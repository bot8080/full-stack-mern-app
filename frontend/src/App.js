import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddUser from './components/AddUser';
import DisplayUser from './components/DisplayUser';
import UpdateUser from './components/UpdateUser';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DisplayUser />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/update/:id" element={<UpdateUser />} />
      </Routes>
    </Router>
  );
};

export default App;