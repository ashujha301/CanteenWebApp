import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import BookDataService from "../services/book.services";

const BooksList = () => {
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
  const [books, setBooks] = useState([]);
  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    const data = await BookDataService.getAllBooks();
    setBooks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deleteHandler = async (id) => {
    await BookDataService.deleteBook(id);
    getBooks();
  };

  const sortedBooks = books.sort((a, b) => {
    if(a.date !== b.date) {
        return a.date > b.date ? 1 : -1;
    }
    return a.time > b.time ? 1 : -1;
});

  return (
    <>
      <div>
        <Button variant="dark edit" onClick={getBooks} style={{ margin: 10 }}>
          Refresh List
        </Button>
      </div>

      {/* <pre>{JSON.stringify(books, undefined, 2)}</pre>} */}
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Rank</th>
            <th>Service Number</th>
            <th>First Name</th>
            <th>Middle Name</th>
            <th>Last Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Canteen Card Number</th>
            <th>Token</th>
          </tr>
        </thead>
        <tbody>
          {sortedBooks.map((doc, index) => {
            return (
              <tr key={doc.id}>
                <td>{index + 1}</td>
                <td>{doc.rank}</td>
                <td>{doc.servicenumber}</td>
                <td>{doc.firstname}</td>
                <td>{doc.middlename}</td>
                <td>{doc.lastname}</td>
                <td>{doc.date}</td>
                <td>{doc.time}</td>
                <td>{doc.card}</td>
                <td>{doc.token}</td>
                <td>
                  <Button
                    variant="danger"
                    className="delete"
                    onClick={() => deleteHandler(doc.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <div
        className="d-grid gap-2"
        style={{ justifyContent: "flex-end", marginRight: 60 }}
      >
        <Button variant="primary" onClick={handleLogout} size="lg">
          Log out
        </Button>
      </div>
    </>
  );
};

export default BooksList;
