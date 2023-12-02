import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import AddUser from './components/AddUser';
import DisplayUser from './components/DisplayUser';
// import UpdateUser from './components/UpdateUser';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DisplayUser />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add-user" element={<AddUser />} />
        {/* <Route path="/update-user" element={<UpdateUser />} /> */}
      </Routes>
    </Router>
  );
};

export default App;