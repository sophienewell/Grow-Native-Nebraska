import "./App.css";
import React from "react";
import PlantSearchPage from "./components/PlantSearchPage";
import HomePage from "./components/HomePage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/search" element={<PlantSearchPage />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
