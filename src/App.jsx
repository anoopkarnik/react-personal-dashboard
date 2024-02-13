import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/shared/Layout';
import './assets/css/index.css';
import Dashboard from './pages/Dashboard';
import Notion from './pages/Notion';
import Chatbot from './pages/Chatbot';
import Settings from './pages/Settings';
import Help from './pages/Help';

function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Layout/>} >
            <Route path="" element={<Dashboard/>} />
            <Route path="notion" element={<Notion/>} />
            <Route path="chatbot" element={<Chatbot/>} />
            <Route path="settings" element={<Settings/>} />
            <Route path="help" element={<Help/>} />
          </Route>
        </Routes>
      </Router>
    )
  }

export default App;