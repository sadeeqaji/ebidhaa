import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "../src/App.css";

import Views from "../src/container/Views";

function App() {
  return (
    <Router>
      <div>
        <Views />
      </div>
    </Router>
  );
}

export default App;
