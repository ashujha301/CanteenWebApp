import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { Box } from "theme-ui";
import { useUserAuth } from "../context/UserAuthContext";
// import BookDataService from "../services/book.services";

const Home = () => {
  const token = localStorage.getItem("token");
  // const [books, setBooks] = useState([]);
  // useEffect(() => {
  //   getBooks();
  // }, []);
  // const getBooks = async () => {
  //   const data = await BookDataService.getAllBooks();
  //   setBooks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  // };
  // console.log(books);
  const { logOut } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
      localStorage.removeItem("token");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Box sx={{ backgroundColor: "lightBlue", height: "100vh" }}>
      <div
        className="p-4 pt-5 text-center"
        style={{ backgroundColor: "#1D213C" }}
      >
        <h1 style={{ color: "white" }}>Thank You </h1>
      </div>
      <div className="d-grid gap-2 mt-5 text-center">
        <h1 style={{ fontWeight: "bold", color: "green" }}>
          Slot booked succesfully!
        </h1>
        <h1>Your Token Number is:</h1>
        <h1 className="p-4 box pt-4 text-center" style={{ fontWeight: "bold" }}>
          {token}
        </h1>
        <h1 style={{ fontWeight: "bold", color: "red" }}>
          Take Screenshot To Show This Token For Reference !
        </h1>
      </div>
      <div className="d-grid gap-2" style={{ justifyContent: "center" }}>
        <Button
          size="lg"
          className="mt-3"
          variant="primary"
          onClick={handleLogout}
        >
          Log out
        </Button>
      </div>
    </Box>
  );
};

export default Home;
