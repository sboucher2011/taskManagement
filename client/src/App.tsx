// external
import { QueryClient, QueryClientProvider } from "react-query";
import React, { FC, ReactElement } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// views
import HomePage from "./views/DZL/HomePage/Home";
import Dashboard from "./views/TM/Dashboard/Dashboard";

// constants
import { DASHBOARD_ROUTE } from "./constants/routes";

const queryClient = new QueryClient();

const App: FC = (): ReactElement => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route element={<HomePage />} path={"/"} />
          <Route path={DASHBOARD_ROUTE} element={<Dashboard />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
