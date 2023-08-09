import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="home" element={<Home />} />

        <Route path="profile" element={<Profile />} />
        <Route exact path="login" element={<Login />} />
        <Route exact path="register" element={<Register />} />

      </Routes>
    </Router>
  );
}

export default App;
