import { Toaster } from "react-hot-toast";
import "./App.css";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useAuthContext } from "./Context/AuthContext";

function App() {
  const { AuthUser } = useAuthContext();
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Router>
        <Routes>
          <Route
            path="/"
            element={AuthUser ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={AuthUser ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/signup"
            element={AuthUser ? <Navigate to="/" /> : <Signup />}
          />
        </Routes>
        <Toaster />
      </Router>
    </div>
  );
}

export default App;
