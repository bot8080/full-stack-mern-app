import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import UserForm from './components/UserForm';
import UserTable from './components/UserTable';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserTable />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add-user" element={<UserForm />} />
        {/* <Route path="/add-user" element={<UserForm />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
