import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Используем правильные импорты
import LoginForm from './LoginForm';
import TaskList from './TaskList';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/tasks" element={<TaskList />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
