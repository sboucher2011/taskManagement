// external
import { QueryClient, QueryClientProvider } from "react-query";
import React, { FC, ReactElement } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// views
import HomePage from "./views/DZL/HomePage/Home";
import Dashboard from "./views/TM/Dashboard/Dashboard";

// constants
import { DASHBOARD_ROUTE, LOGIN_ROUTE, SIGNUP_ROUTE } from "./constants/routes";
import { LogIn } from "./views/TM/Auth/LogIn";

const queryClient = new QueryClient();

const App: FC = (): ReactElement => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route element={<HomePage />} path={"/"} />
          <Route path={DASHBOARD_ROUTE} element={<Dashboard />} />
          <Route path={LOGIN_ROUTE} element={<LogIn />} />
          <Route path={SIGNUP_ROUTE} element={<LogIn />} />
          {/*TODO <Route path={"/*"} element={NOT FOUND PAGE} /> */}
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
