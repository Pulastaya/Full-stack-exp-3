import { Routes, Route, Link } from "react-router-dom";
import Profile from "./Profile";
import Dashboard from "./Dashboard";

function App() {
  return (
    <div>
      <h1>Multi-Page SPA</h1>

      <nav>
        <Link to="/profile">Profile</Link> |{" "}
        <Link to="/dashboard">Dashboard</Link>
      </nav>

      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
