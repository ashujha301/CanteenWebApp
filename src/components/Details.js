import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
import { Form, Alert, InputGroup, Button, ButtonGroup } from "react-bootstrap";
import BookDataService from "../services/book.services";
//import token from "./Token";

const Details = ({ id, setId, generateRandomToken, saveTokenToFirestore }) => {
  const [rank, setRank] = useState("");
  const [servicenumber, setServiceNumber] = useState("");
  const [card, setCard] = useState("");
  const [firstname, setFirstName] = useState("");
  const [middlename, setMiddleName] = useState("");
  const [lastname, setLastname] = useState("");
  const [time, setTime] = useState("time");
  const [slot, setSlot] = useState("Today");
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
      servicenumber === "" || time === ""
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
      slot,
      time
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
    setTime("");
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
      setSlot(docSnap.data().status);
      setCard(docSnap.data().time);
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
              <InputGroup.Text id="formBookTitle"></InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Rank"
                value={rank}
                onChange={(e) => setRank(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group controlId="formBookTitle">
            <InputGroup>
              <InputGroup.Text id="formBookTitle"></InputGroup.Text>
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
              <InputGroup.Text id="formBookTitle"></InputGroup.Text>
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
              <InputGroup.Text id="formBookTitle"></InputGroup.Text>
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
              <InputGroup.Text id="formBookAuthor"></InputGroup.Text>
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
              <InputGroup.Text id="formBookTitle"></InputGroup.Text>
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
              <InputGroup.Text id="formBookTitle"></InputGroup.Text>
              <Form.Select aria-label="Basic example">
                <option>Select Slot Timing</option>
                <option value={time}>10:00 - 11:00</option>
                <option value={time}>11:00 - 12:00</option>
                <option value={time}>12:00 - 13:00</option>
                <option value={time}>14:00 - 15:00</option>
                <option value={time}>15:00 - 16:00</option>
                <option value={time}>16:00 - 16:30</option>
              </Form.Select>
            </InputGroup>
          </Form.Group>

          <ButtonGroup aria-label="Basic example">
            <Button
              disabled={flag}
              variant="success"
              onClick={(e) => {
                setSlot("Today");
                setFlag(true);
              }}
            >
              Today
            </Button>
            <Button
              variant="danger"
              disabled={!flag}
              onClick={(e) => {
                setSlot("Tomorrow");
                setFlag(false);
              }}
            >
              Tomorrow
            </Button>
          </ButtonGroup>
          <div>
            <Button variant="primary" type="Submit" onClick={handleClick}>
              Add/ Update
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Details;
