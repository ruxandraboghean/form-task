import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Form } from "./components/Form";
import { Navbar } from "./components/Navbar";
import { Audiences } from "./components/Audiences";


function App() {
  return (
    <div className="app">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" Component={Audiences} />
          <Route path="/create-audience" Component={Form} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
