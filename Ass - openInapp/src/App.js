import React from "react";
import { Routes, Route } from "react-router-dom";

//Importing Pages
import ProtectedRoute from "./components/ProtectedRoute";
import DashBoard from "./pages/DashBoard";
import Login from "./authentication/Login";
import NotFound from "./components/NotFound";

const Routing = () => {
  return (
    <Routes>
      {/* <Route exact path="/" element={<DashBoard />} /> */}
      <Route
        exact
        path="/login"
        element={<ProtectedRoute Component={Login} />}
      />{" "}
      <Route
        exact
        path="/"
        element={<ProtectedRoute Component={DashBoard} />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

function App() {
  return (
    <>
      <Routing />
    </>
  );
}

export default App;
