import React, { forwardRef, useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import BookDataService from "../services/book.services";
import "firebase/firestore";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Flex, Grid, Text } from "theme-ui";

const BooksList = ({ id, setId }) => {
  const [stockcheck, setStockcheck] = useState("");
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

  const onSaveStock = async (id, newBook) => {
    try {
      const obj = { new: newBook };
      await BookDataService.updateStock(id, obj);
    } catch (error) {
      console.log(error);
    }
  };
  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <Button
      variant="dark edit"
      style={{ width: 120, height: 40 }}
      onClick={onClick}
      ref={ref}
    >
      {value}
    </Button>
  ));

  return (
    <>
      <Grid columns={[1,1,3]} gap={3}>
        <Flex>
          <Button
            variant="dark edit"
            onClick={getBooks}
            style={{ width: 120, height: 40, margin: 10 }}
          >
            Refresh List
          </Button>
          <Button
            variant="dark edit"
            onClick={handlePrint}
            style={{ width: 120, height: 40, margin: 10 }}
          >
            Print
          </Button>
        </Flex>
        <Grid columns={[1,1,3]} gap={2} sx={{ alignItems: "center" }}>
          <Text style={{ color: "black", fontSize: "20", fontWeight: "bold" }}>
            Stock Check Date
          </Text>
          <DatePicker
            selected={stockcheck}
            onChange={(date) => setStockcheck(date)}
            customInput={<CustomInput />}
            dateFormat="dd/MM/yyyy"
          />
          <Button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              onSaveStock("stockDate", stockcheck);
            }}
            style={{ width: 120, height: 40 }}
            variant="primary"
          >
            Save
          </Button>
        </Grid>
        <div
          className="d-grid gap-2"
          style={{ justifyContent: "flex-end", marginRight: 60 }}
        >
          <Button
            variant="primary"
            onClick={handleLogout}
            size="md"
            style={{ width: 120, height: 40, margin: 10 }}
          >
            Log out
          </Button>
        </div>
      </Grid>

      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Rank</th>
            <th>Service Number</th>
            <th>Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Canteen Card No</th>
            <th>Token</th>
          </tr>
        </thead>
        <tbody>
          {books.map((doc, index) => {
            const date = new Date(
              doc.date.seconds * 1000 + doc.date.nanoseconds / 1000000
            );
            return (
              <tr key={doc.id}>
                <td>{index + 1}</td>
                <td>{doc.rank}</td>
                <td>{doc.servicenumber}</td>
                <td>{doc.firstname}</td>
                <td>{date.toDateString()}</td>
                <td>{doc.time}:00</td>
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
    </>
  );
};

export default BooksList;
