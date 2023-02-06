import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
import { Form, Alert, InputGroup, Button, ButtonGroup } from "react-bootstrap";
import BookDataService from "../services/book.services";
import { Box, Flex } from "theme-ui";
import Navbar from "./Navbar";
import Footer from "./footer";
import { v4 as uuidv4 } from "uuid";
// import Modal from "react-modal";
// import { db } from "../firebase";
import { useNavigate } from "react-router-dom";
import app, { db } from "../firebase";

import "firebase/firestore";
import { collection, query, where, getDocs } from "firebase/firestore";

//to get current date and tomorrows date
const currentDate = new Date();
const today = new Date(currentDate);
today.setDate(today.getDate() + 1);
const tomorrow = new Date(currentDate);
tomorrow.setDate(tomorrow.getDate() + 2);

const Details = ({ id, setId }) => {
  const [rank, setRank] = useState("");
  const [servicenumber, setServiceNumber] = useState("");
  const [card, setCard] = useState("");
  const [firstname, setFirstName] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  // const [modalIsOpen, setModalIsOpen] = useState(false);
  const [flag, setFlag] = useState(true);
  const [day, setDay] = useState("");
  const [selectedButton, setSelectedButton] = useState("");
  const [message, setMessage] = useState({ error: false, msg: "" });
  const [token, setToken] = useState(
    localStorage.getItem("token") || uuidv4().substring(0, 8).toUpperCase()
  );
  const navigate = useNavigate();
  const slotLimit = 2;
  const [limit, setLimit] = useState("");
  //const [disable , setDisable] = useState(false);
  const ranks = [
    "AIR CMDE",
    "GP CAPT",
    "WG CDR",
    "SQN LDR",
    "FLT LT",
    "FLG OFFR",
    "HFL",
    "HFO",
    "MWO",
    "WO",
    "JWO",
    "SGT",
    "CPL",
    "LAC",
    "AC",
  ];

  const times = [
    { time: "10:00 - 11:00", value: 10 },
    { time: "11:00 - 12:00", value: 11 },
    { time: "12:00 - 13:00", value: 12 },
    { time: "14:00 - 15:00", value: 14 },
    { time: "15:00 - 16:00", value: 15 },
    { time: "16:00 - 16:30", value: 16 },
  ];

  // const token = uuidv4().substring(0, 8).toUpperCase();

  const handleButtonClick = (value) => {
    setSelectedButton(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    if (
      firstname === "" ||
      rank === "" ||
      servicenumber === "" ||
      card === "" ||
      time === "" ||
      date === ""
    ) {
      setMessage({ error: true, msg: "All fields are mandatory!" });
      return;
    } else {
      localStorage.setItem("token", token);
      localStorage.setItem("time", time);
      localStorage.setItem("date", date);
      const newBook = {
        rank,
        card,
        servicenumber,
        firstname,
        date: date,
        time: Number(time),
        token,
      };
      try {
        if (id !== undefined && id !== "") {
          await BookDataService.updateBook(id, newBook);
          setId("");
          setMessage({ error: false, msg: "Updated successfully!" });
        } else {
          await BookDataService.details(newBook);
          setMessage({ error: false, msg: "Slot booked successfully!" });
          navigate("/Home");
        }
      } catch (err) {
        setMessage({ error: true, msg: err.message });
      }
    }

    setFirstName("");

    setRank("");

    setCard("");
    setServiceNumber("");
    setDate("");
    setTime("");
    currentDate("");
    tomorrow("");
    setToken("");
  };

  const editHandler = async () => {
    setMessage("");

    try {
      const docSnap = await BookDataService.getBook(id);
      console.log("the record is :", docSnap.data());
      setRank(docSnap.data().rank);
      setServiceNumber(docSnap.data().servicenumber);
      setFirstName(docSnap.data().firstname);
      setCard(docSnap.data().card);
      setDate(docSnap.data().date);
      setTime(docSnap.data().time);
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
  };
  let querySnapshot;

  const handleSub = async (e) => {
    setTime(e.target.value);
  };

  useEffect(() => {
    if (id !== undefined && id !== "") {
      editHandler();
    }
  }, [id]);

  // const disable = () => {
  //     if (limit > slotLimit) return true;
  //     else return false;
  // };

  useEffect(() => {
    let count = 0;
    const newFunction = async () => {
      const q = query(
        collection(db, "Canteen_Slots"),
        where("time", "==", Number(time))
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        if (
          new Date(doc.data().date.seconds * 1000).toDateString() ===
          new Date(date).toDateString()
        )
          count++;
      });
      setLimit(count);
    };
    newFunction();
    // Code that relies on the updated state
  }, [time, date]);

  //card input
  const handleCardChange = (e) => {
    let value = e.target.value;
    value = value
      .toUpperCase()
      .replace(/[^A-Z0-9]/g, "")
      .substr(0, 19);
    const firstTwo = value.substr(0, 2);
    const rest = value.substr(2).replace(/(.{4})/g, "$1 ");
    setCard(firstTwo + rest);
  };
  const isSaturday = date.toString().split(" ")[0] === "Sat" || "Sun";
  //to check if card already exist
  //   const todayTimestamp = app.firestore.Timestamp.fromDate(new Date());
  // const tomorrowTimestamp = app.firestore.Timestamp.fromDate(new Date(new Date().setDate(new Date().getDate()+1)));

  // const checkBooking = async (date, day) => {
  //   let bookingsRef = null;
  //   if(day === 'today'){
  //     bookingsRef = app.firestore().collection("bookings").where("date", "==", todayTimestamp).where("card", "==", card);
  //   }else{
  //     bookingsRef = app.firestore().collection("bookings").where("date", "==", tomorrowTimestamp).where("card", "==", card);
  //   }
  //   bookingsRef.get().then(snapshot => {
  //     if (snapshot.empty) {
  //       setDate(date);
  //       setDay(day);
  //     } else {
  //       setFlag(false);
  //       alert("This card number is already booked for "+day);
  //     }
  //   });
  //}

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
          <Box
            sx={{
              alignSelf: "center",
              justifyContent: "center",
              flex: 1,
              width: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
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
              <ButtonGroup
                aria-label="Basic example"
                className="mb-3"
                style={{ width: "100%" }}
              >
                <Button
                  variant={selectedButton === "SERVING" ? "success" : "warning"}
                  style={{ flex: 1 }}
                  onClick={(e) => {
                    handleButtonClick("SERVING");
                  }}
                >
                  SERVING
                </Button>
                <Button
                  variant={selectedButton === "VETERANS" ? "success" : "danger"}
                  style={{ flex: 1 }}
                  onClick={(e) => {
                    handleButtonClick("VETERANS");
                  }}
                >
                  VETERANS
                </Button>
              </ButtonGroup>

              {selectedButton === "SERVING" && (
                <Form.Group controlId="formBookTitle" className="mb-3">
                  <InputGroup>
                    <Form.Select
                      aria-label="Basic example"
                      onChange={(e) => {
                        setRank(e.target.value);
                      }}
                    >
                      <option> Select Rank</option>
                      {ranks.map((rank) => {
                        return (
                          <option value="rank" onChange={handleSubmit}>
                            {rank}
                          </option>
                        );
                      })}
                    </Form.Select>
                  </InputGroup>
                </Form.Group>
              )}

              {selectedButton === "VETERANS" && (
                <Form.Group controlId="formBookTitle" className="mb-3">
                  <InputGroup>
                    <Form.Select
                      aria-label="Basic example"
                      onChange={(e) => {
                        setRank(e.target.value);
                      }}
                    >
                      <option> Select Rank</option>
                      {ranks.map((rank) => {
                        return (
                          <option value="rank" onChange={handleSubmit}>
                            {rank}
                          </option>
                        );
                      })}
                    </Form.Select>
                  </InputGroup>
                </Form.Group>
              )}

              <Form.Group controlId="formBookTitle" className="mb-3">
                <InputGroup>
                  <Form.Control
                    type="number"
                    placeholder="Service Number *"
                    value={servicenumber}
                    onChange={(e) => setServiceNumber(e.target.value)}
                  />
                </InputGroup>
              </Form.Group>

              <Form.Group controlId="formBookTitle" className="mb-3">
                <InputGroup>
                  <Form.Control
                    type="text"
                    placeholder="Name *"
                    value={firstname}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </InputGroup>
              </Form.Group>

              <Form.Group controlId="formBookTitle" className="mb-3">
                <InputGroup>
                  <Form.Control
                    type="text"
                    placeholder="Card number *"
                    value={card}
                    onChange={(e) => setCard(e.target.value)}
                  />
                </InputGroup>
              </Form.Group>

              <ButtonGroup
                aria-label="Basic example"
                className="mb-3"
                style={{ width: "100%" }}
              >
                <Button
                  variant={day === "today" ? "success" : "warning"}
                  disabled={!flag || today.toString().split(" ")[0] === "Thu"}
                  value={today}
                  style={{ flex: 1 }}
                  onClick={(e) => {
                    setDate(new Date(e.target.value));
                    setDay("today");
                  }}
                >
                  {today.toString().split(" ").slice(0, 4).join(" ")}
                </Button>
                <Button
                  variant={day === "tomorrow" ? "success" : "danger"}
                  disabled={
                    !flag || tomorrow.toString().split(" ")[0] === "Thu"
                  }
                  value={tomorrow}
                  style={{ flex: 1 }}
                  onClick={(e) => {
                    setDate(new Date(e.target.value));
                    setDay("tomorrow");
                  }}
                >
                  {tomorrow.toString().split(" ").slice(0, 4).join(" ")}
                </Button>
              </ButtonGroup>

              {selectedButton === "SERVING" && (
                <Form.Group controlId="formBookTitle" className="mb-3">
                  <InputGroup>
                    <Form.Select
                      aria-label="Timestamp Selector"
                      onChange={(e) => {
                        handleSub(e);
                      }}
                    >
                      <option> Select Slot Timing</option>

                      {!isSaturday ? (
                        <option value={10} onChange={handleSubmit}>
                          10:00 - 11:00
                        </option>
                      ) : (
                        times.map((time) => {
                          return (
                            <option value={time.value} onChange={handleSubmit}>
                              {time.time}
                            </option>
                          );
                        })
                      )}
                    </Form.Select>
                  </InputGroup>
                </Form.Group>
              )}

              {selectedButton === "VETERANS" && (
                <Form.Group controlId="formBookTitle" className="mb-3">
                  <InputGroup>
                    <Form.Select
                      aria-label="Timestamp Selector"
                      onChange={(e) => {
                        handleSub(e);
                      }}
                    >
                      <option> Select Slot Timing</option>
                      {times.map((time) => {
                        return (
                          <option value={time.value} onChange={handleSubmit}>
                            {time.time}
                          </option>
                        );
                      })}
                    </Form.Select>
                  </InputGroup>
                </Form.Group>
              )}

              <Flex
                sx={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  variant="success"
                  type="Submit"
                  style={{
                    width: "50%",
                  }}
                  onChange={handleSubmit}
                  id="book-slot-button"
                >
                  BOOK SLOT
                </Button>
              </Flex>
            </Form>
          </Box>
        </Box>
      </Box>
      <Footer label="Copyright 2023. All rights reserved."></Footer>
    </>
  );
};

export default Details;
