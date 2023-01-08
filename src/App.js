import { Routes, Route } from "react-router-dom";
import { Box } from "theme-ui";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import PhoneSignUp from "./components/PhoneSignUp";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";

function App() {
  return (
    <Box>
      <UserAuthContextProvider>
        <Routes>
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<Login />} />
          <Route path="/phonesignup" element={<PhoneSignUp />} />
        </Routes>
      </UserAuthContextProvider>
    </Box>
  );
}

export default App;
