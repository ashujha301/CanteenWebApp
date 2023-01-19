import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import BookDataService from "../services/book.services";
import moment from "moment";
import app, { db } from "../firebase";
import "firebase/firestore";
import { collection, query, where, getDocs } from "firebase/firestore";

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

  const handlePrint = () => {
    window.print();
  }

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


  function convertTimestamp(timestamp) {
    var d = new Date((timestamp * 1000)-(7.5 * 60 * 60 * 1000)),	// Convert the passed timestamp to milliseconds
    
      hh = d.getHours(),
      h = hh,
      min = ('0' + d.getMinutes()).slice(-2),		// Add leading 0.
      ampm = 'AM',
      time;
        
    if (hh > 12) {
      h = hh - 12;
      ampm = 'PM';
    } else if (hh === 12) {
      h = 12;
      ampm = 'PM';
    } else if (hh == 0) {
      h = 12;
    }
    
    // ie: 2013-02-18, 8:35 AM	
    time = h + ':' + min + ' ' + ampm;
    console.log(d.toLocaleTimeString())
    return time;
  }

  

  return (
    <>
      <div>
        <Button variant="dark edit" onClick={getBooks} style={{ margin: 10 }}>
          Refresh List
        </Button>
        <Button variant="dark edit" onClick={handlePrint}>Print</Button>
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
            <th>Canteen Card No</th>
            <th>Token</th>
          </tr>
        </thead>
        <tbody>
          {books.map((doc, index) => {
            return (
              <tr key={doc.id}>
                <td>{index + 1}</td>
                <td>{doc.rank}</td>
                <td>{doc.servicenumber}</td>
                <td>{doc.firstname}</td>
                <td>{doc.middlename}</td>
                <td>{doc.lastname}</td>
                <td>{doc.date.split(" ").slice(0, 4).join(" ")}</td>
                <td>{convertTimestamp(doc.time)}</td>
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
