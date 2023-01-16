// external
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// views
import HomePage from "./views/DZL/HomePage/Home";
import Dashboard from "./views/TM/Dashboard/Dashboard";

// constants
import { DASHBOARD_ROUTE } from "./constants/routes";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<HomePage />} path={"/"} />
          <Route path={DASHBOARD_ROUTE} element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
