import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
// import BookDataService from "../services/book.services";

const Home = () => {
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
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="p-4 box mt-3 text-center">
        Thank You <br />
      </div>
      <div className="d-grid gap-2">
        <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>
      </div>
    </>
  );
};

export default Home;
