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
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<Login />} />
          <Route path="/phonesignup" element={<PhoneSignUp />} />
          <Route
            path="/details"
            element={
              <Details
                id={Id}
                setId={setId}
              />
            }
          />
          <Route
            path="/bookslist"
            element={<BooksList getId={getIdHandler} />}
          />
        </Routes>
      </UserAuthContextProvider>
    </Box>
  );
}

export default App;
