import { Routes, Route, Link } from "react-router-dom";
import Profile from "./Profile";
import Dashboard from "./Dashboard";

function App() {
  return (
    <>
      <nav className="navbar">
        <Link to="/profile">Profile</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>

      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
