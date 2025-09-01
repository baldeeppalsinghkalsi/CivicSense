import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";  
import Login from "./Pages/login"; 

function App() {
  return (
    <Router>
      <header>
        <Link to="/">
          <img src="logo.png" alt="Logo" style={{ width: "100px" }} />
        </Link>
        <nav>
          <Link to="/">Home</Link> | 
          <Link to="/login">Login</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
