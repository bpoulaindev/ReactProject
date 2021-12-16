import React from 'react';
import { Users } from './components/users/Users';
import { User } from './components/users/User';
import { Tasks } from './components/tasks/Tasks';
import { TaskDetails } from './components/tasks/TaskDetails';
import { Comments } from './components/comments/Comments';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { NavBar } from './NavBar';

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/users" element={<Users/>} />
        <Route path="/user/:userId" element={<User />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/task/:taskId" element={<TaskDetails />} />
        <Route path="/comments" element={<Comments />} />
      </Routes>
    </div>
  )
  
}

export default App;
