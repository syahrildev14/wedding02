import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./pages/Admin";
import Undangan from "./pages/undangan/Undangan";
import Home from "./pages/undangan/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/:slug" element={<Undangan />} />
        <Route path="/:slug/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
