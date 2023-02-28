import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { Box } from "theme-ui";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Details from "./components/Details";
import PhoneSignUp from "./components/PhoneSignUp";
import ProtectedRoute, {
  AdminProtectedRoute,
} from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import BooksList from "./components/BooksList";
import { useEffect, useState } from "react";

function App() {
  let navigate = useNavigate();
  const location = useLocation();
  const [Id, setId] = useState("");

  const getIdHandler = (id) => {
    setId(id);
  };

  useEffect(() => {
    if (location.pathname === "/Home") {
      const unlisten = window.addEventListener("popstate", (e) => {
        navigate("/", { replace: true });
        localStorage.removeItem("token");
        localStorage.removeItem("time");
        localStorage.removeItem("date");
        window.location.reload();
      });
      return () => {
        if (typeof unlisten === "function") {
          unlisten();
        }
      };
    }
  }, [navigate, location]);

  return (
    <Box>
      <UserAuthContextProvider>
        <Routes>
          <Route
            path="/slotlist"
            element={
              <AdminProtectedRoute>
                <BooksList getId={getIdHandler} />
              </AdminProtectedRoute>
            }
          />
          <Route
            path="/Home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<PhoneSignUp />} />
          <Route
            path="/details"
            element={
              <ProtectedRoute>
                <Details id={Id} setId={setId} />
              </ProtectedRoute>
            }
          />
        </Routes>
      </UserAuthContextProvider>
    </Box>
  );
}

export default App;
