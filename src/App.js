import { Routes, Route } from "react-router-dom";
import { Box } from "theme-ui";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Details from "./components/Details";
import PhoneSignUp from "./components/PhoneSignUp";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import BooksList from "./components/BooksList";
import { useState } from "react";

function App() {
  const [Id, setId] = useState("");

  const getIdHandler = (id) => {
    setId(id);
  };

  return (
    <Box>
      <UserAuthContextProvider>
        <Routes>
          <Route
            path="/slotlist"
            element={
              <ProtectedRoute>
                <BooksList getId={getIdHandler} />
              </ProtectedRoute>
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
