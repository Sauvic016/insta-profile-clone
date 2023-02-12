import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Profile />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
