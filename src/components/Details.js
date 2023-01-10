import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
import { Form, Alert, InputGroup, Button, ButtonGroup } from "react-bootstrap";
import BookDataService from "../services/book.services";
import { Box, Flex } from "theme-ui";
import Navbar from "./Navbar";
import Footer from "./footer";

//to get current date and tomorrows date
const currentDate = new Date();
const tomorrow = new Date(currentDate);
tomorrow.setDate(tomorrow.getDate() + 1);

const Details = ({ id, setId, generateRandomToken, saveTokenToFirestore }) => {
  const [rank, setRank] = useState("");
  const [servicenumber, setServiceNumber] = useState("");
  const [card, setCard] = useState("");
  const [firstname, setFirstName] = useState("");
  const [middlename, setMiddleName] = useState("");
  const [lastname, setLastname] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [flag, setFlag] = useState(true);
  const [message, setMessage] = useState({ error: false, msg: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (
      firstname === "" ||
      lastname === "" ||
      rank === "" ||
      card === "" ||
      servicenumber === "" ||
      time === "" ||
      date === ""
    ) {
      setMessage({ error: true, msg: "All fields are mandatory!" });
      return;
    }
    const newBook = {
      rank,
      card,
      servicenumber,
      middlename,
      firstname,
      lastname,
      date,
      time,
    };
    console.log(newBook);

    try {
      if (id !== undefined && id !== "") {
        await BookDataService.updateBook(id, newBook);
        setId("");
        setMessage({ error: false, msg: "Updated successfully!" });
      } else {
        await BookDataService.details(newBook);
        setMessage({ error: false, msg: "added successfully!" });
      }
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }

    setFirstName("");
    setLastname("");
    setRank("");
    setMiddleName("");
    setCard("");
    setServiceNumber("");
    setDate("");
    setTime("");
    currentDate("");
    tomorrow("");
  };

  const editHandler = async () => {
    setMessage("");
    try {
      const docSnap = await BookDataService.getBook(id);
      console.log("the record is :", docSnap.data());
      setRank(docSnap.data().rank);
      setServiceNumber(docSnap.data().servicenumber);
      setFirstName(docSnap.data().firstname);
      setMiddleName(docSnap.data().middlename);
      setCard(docSnap.data().card);
      setDate(docSnap.data().date);
      setTime(docSnap.data().time);
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
  };

  useEffect(() => {
    console.log("The id here is : ", id);
    if (id !== undefined && id !== "") {
      editHandler();
    }
  }, [id]);

  const handleClick = () => {
    const token = generateRandomToken();
    saveTokenToFirestore(token);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "blue",
          height: "100vh",
          flex: 1,
          width: "100%",
        }}
      >
        <Navbar label="DETAILS" />
        <Box
          sx={{
            alignSelf: "center",
            justifyContent: "center",
            width: ["80%", "60%", "50%", "33%"],
            flex: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* <img src="../Canteenlogo.png" alt="Canteen Logo" /> */}
          <div>
            {message?.msg && (
              <Alert
                variant={message?.error ? "danger" : "success"}
                dismissible
                onClose={() => setMessage("")}
              >
                {message?.msg}
              </Alert>
            )}
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBookTitle">
                <InputGroup>
                  {/* <InputGroup.Text id="formBookTitle"></InputGroup.Text> */}
                  <Form.Select
                    aria-label="Basic example"
                    onChange={(e) => {
                      setRank(e.target.value);
                    }}
                  >
                    <option> Select Rank</option>

                    <option value="GP CAPT" onChange={handleSubmit}>
                      GP CAPT
                    </option>
                    <option value="WG CDR" onChange={handleSubmit}>
                      WG CDR
                    </option>
                    <option value="FLT LT" onChange={handleSubmit}>
                      FLT LT
                    </option>
                    <option value="HFL" onChange={handleSubmit}>
                      HFL
                    </option>
                    <option value="HFO" onChange={handleSubmit}>
                      HFO
                    </option>
                    <option value="MWO" onChange={handleSubmit}>
                      MWO
                    </option>
                    <option value="WO" onChange={handleSubmit}>
                      WO
                    </option>
                    <option value="JWO" onChange={handleSubmit}>
                      JWO
                    </option>
                    <option value="SGT" onChange={handleSubmit}>
                      SGT
                    </option>
                    <option value="CPL" onChange={handleSubmit}>
                      CPL
                    </option>
                    <option value="LAC" onChange={handleSubmit}>
                      LAC
                    </option>
                    <option value="AC" onChange={handleSubmit}>
                      AC
                    </option>
                  </Form.Select>
                </InputGroup>
              </Form.Group>

              <Form.Group controlId="formBookTitle">
                <InputGroup>
                  {/* <InputGroup.Text id="formBookTitle"></InputGroup.Text> */}
                  <Form.Control
                    type="number"
                    placeholder="Service Number"
                    value={servicenumber}
                    onChange={(e) => setServiceNumber(e.target.value)}
                  />
                </InputGroup>
              </Form.Group>

              <Form.Group controlId="formBookTitle">
                <InputGroup>
                  {/* <InputGroup.Text id="formBookTitle"></InputGroup.Text> */}
                  <Form.Control
                    type="text"
                    placeholder="First Name"
                    value={firstname}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </InputGroup>
              </Form.Group>

              <Form.Group controlId="formBookTitle">
                <InputGroup>
                  {/* <InputGroup.Text id="formBookTitle"></InputGroup.Text> */}
                  <Form.Control
                    type="text"
                    placeholder="Middle Name"
                    value={middlename}
                    onChange={(e) => setMiddleName(e.target.value)}
                  />
                </InputGroup>
              </Form.Group>

              <Form.Group controlId="formBookAuthor">
                <InputGroup>
                  {/* <InputGroup.Text id="formBookAuthor"></InputGroup.Text> */}
                  <Form.Control
                    type="text"
                    placeholder="Last Name"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                  />
                </InputGroup>
              </Form.Group>

              <Form.Group controlId="formBookTitle">
                <InputGroup>
                  {/* <InputGroup.Text id="formBookTitle"></InputGroup.Text> */}
                  <Form.Control
                    type="text"
                    placeholder="Card number"
                    value={card}
                    onChange={(e) => setCard(e.target.value)}
                  />
                </InputGroup>
              </Form.Group>

              <Form.Group controlId="formBookTitle">
                <InputGroup>
                  {/* <InputGroup.Text id="formBookTitle"></InputGroup.Text> */}
                  <Form.Select
                    aria-label="Basic example"
                    onChange={(e) => {
                      setTime(e.target.value);
                    }}
                  >
                    <option> Select Slot Timing</option>

                    <option value="10-11am" onChange={handleSubmit}>
                      10:00 - 11:00
                    </option>
                    <option value="11-12am" onChange={handleSubmit}>
                      11:00 - 12:00
                    </option>
                    <option value="12:00-1pm" onChange={handleSubmit}>
                      12:00 - 13:00
                    </option>
                    <option value="2-3pm" onChange={handleSubmit}>
                      14:00 - 15:00
                    </option>
                    <option value="3-4pm" onChange={handleSubmit}>
                      15:00 - 16:00
                    </option>
                    <option value="4-4:30pm" onChange={handleSubmit}>
                      16:00 - 16:30
                    </option>
                  </Form.Select>
                </InputGroup>
              </Form.Group>

              <ButtonGroup aria-label="Basic example">
                <Button
                  variant="success"
                  disabled={!flag}
                  value={currentDate
                    .toString()
                    .split(" ")
                    .slice(0, 4)
                    .join(" ")}
                  onClick={(e) => setDate(e.target.value)}
                >
                  {currentDate.toString().split(" ").slice(0, 4).join(" ")}
                </Button>
                <Button
                  variant="danger"
                  disabled={!flag}
                  value={tomorrow.toString().split(" ").slice(0, 4).join(" ")}
                  onClick={(e) => setDate(e.target.value)}
                >
                  {tomorrow.toString().split(" ").slice(0, 4).join(" ")}
                </Button>
              </ButtonGroup>

              <div>
                <Button
                  id="book-slot-button"
                  variant="primary"
                  type="Submit"
                  onClick={handleClick}
                >
                  BOOK SLOT
                </Button>
              </div>
            </Form>
          </div>
        </Box>
      </Box>
      <Footer label="Copyright 2020. All rights reserved."></Footer>
    </>
  );
};

export default Details;
