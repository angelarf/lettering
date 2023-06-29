import React, { lazy } from 'react';
import { Routes, Route, Outlet, Link } from "react-router-dom";

const GamePage = lazy(() => import('./pages/GamePage'))

function App() {
  return (
    <Routes>
      <Route path="/" element={<GamePage />} />
    </Routes>
  );
}

export default App;
