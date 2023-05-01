import React, { useState, useEffect } from "react";
import { Form, Alert, InputGroup, Button, ButtonGroup } from "react-bootstrap";
import BookDataService from "../services/book.services";
import { Box, Flex } from "theme-ui";
import Navbar from "./Navbar";
import Footer from "./footer";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { alpha } from "@theme-ui/color";

// import { db } from "../firebase";

import "firebase/firestore";
// import { collection, query, where, getDocs } from "firebase/firestore";

//firebase admin collection

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
  const [stockDate, setStockDate] = useState("");
  const [newmsg, setNewMsg] = useState("");
  const navigate = useNavigate();
  // const slotLimit = 2;
  // const [limit, setLimit] = useState("");
  const dateObj = new Date(date);
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
    {
      time: "10:00 - 11:00",
      value: new Date(
        dateObj.getFullYear(),
        dateObj.getMonth(),
        dateObj.getDate(),
        10,
        0,
        0,
        0
      ),
    },
    {
      time: "11:00 - 12:00",
      value: new Date(
        dateObj.getFullYear(),
        dateObj.getMonth(),
        dateObj.getDate(),
        11,
        0,
        0,
        0
      ),
    },
    {
      time: "12:00 - 13:00",
      value: new Date(
        dateObj.getFullYear(),
        dateObj.getMonth(),
        dateObj.getDate(),
        12,
        0,
        0,
        0
      ),
    },
    {
      time: "14:00 - 15:00",
      value: new Date(
        dateObj.getFullYear(),
        dateObj.getMonth(),
        dateObj.getDate(),
        14,
        0,
        0,
        0
      ),
    },
    {
      time: "15:00 - 16:00",
      value: new Date(
        dateObj.getFullYear(),
        dateObj.getMonth(),
        dateObj.getDate(),
        15,
        0,
        0,
        0
      ),
    },
    {
      time: "16:00 - 16:30",
      value: new Date(
        dateObj.getFullYear(),
        dateObj.getMonth(),
        dateObj.getDate(),
        16,
        0,
        0,
        0
      ),
    },
  ];

  const times3 = [
    {
      time: "11:00 - 12:00",
      value: new Date(
        dateObj.getFullYear(),
        dateObj.getMonth(),
        dateObj.getDate(),
        11,
        0,
        0,
        0
      ),
    },
    {
      time: "12:00 - 13:00",
      value: new Date(
        dateObj.getFullYear(),
        dateObj.getMonth(),
        dateObj.getDate(),
        12,
        0,
        0,
        0
      ),
    },
    {
      time: "14:00 - 15:00",
      value: new Date(
        dateObj.getFullYear(),
        dateObj.getMonth(),
        dateObj.getDate(),
        14,
        0,
        0,
        0
      ),
    },
    {
      time: "15:00 - 16:00",
      value: new Date(
        dateObj.getFullYear(),
        dateObj.getMonth(),
        dateObj.getDate(),
        15,
        0,
        0,
        0
      ),
    },
    {
      time: "16:00 - 16:30",
      value: new Date(
        dateObj.getFullYear(),
        dateObj.getMonth(),
        dateObj.getDate(),
        16,
        0,
        0,
        0
      ),
    },
  ];

  const times2 = [
    {
      time: "14:00 - 15:00",
      value: new Date(
        dateObj.getFullYear(),
        dateObj.getMonth(),
        dateObj.getDate(),
        14,
        0,
        0,
        0
      ),
    },
    {
      time: "15:00 - 16:00",
      value: new Date(
        dateObj.getFullYear(),
        dateObj.getMonth(),
        dateObj.getDate(),
        15,
        0,
        0,
        0
      ),
    },
    {
      time: "16:00 - 16:30",
      value: new Date(
        dateObj.getFullYear(),
        dateObj.getMonth(),
        dateObj.getDate(),
        16,
        0,
        0,
        0
      ),
    },
  ];

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
        time: time,
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

  const handleSub = async (e) => {
    setTime(new Date(e.target.value));
  };

  useEffect(() => {
    if (id !== undefined && id !== "") {
      editHandler();
    }
  }, [id]);

  useEffect(() => {
    const getBookData = async (id) => {
      const data = await BookDataService.getPhone(id);
      const q = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setStockDate(
        new Date(q[2]?.new.seconds * 1000 + q[2]?.new.nanoseconds / 1000000)
      );
    };
    getBookData("stockDate");
  }, []);

  useEffect(() => {
    const getBookData = async (id) => {
      const data = await BookDataService.getPhone(id);
      const m = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      const filteredData = m.filter((obj) => obj.id === "msg");
      if (filteredData.length > 0) {
        setNewMsg(filteredData[0]);
      } else {
        setNewMsg("Default value");
      }
    };
    getBookData("newmsg");
  }, []);

  const isSaturday = date.toString().split(" ")[0] === "Sat";
  const height=window.innerHeight;

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundImage: (t) => `
          linear-gradient(
          to bottom,
          ${alpha("grad", 1)(t)},
          ${alpha("navy", 1)(t)}
          )
          `,
          minHeight: height > 800 ? "98vh" : 800,
        }}
      >
        <Navbar label="DETAILS" />
        <Marquee
          className="blink"
          style={{ fontSize: "2rem", color: "red", marginTop: "40px" }}
          loop={0}
          speed={70}
          gradient="false"
          gradientWidth={0}
          delay={1}
        >
          {newmsg.new}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </Marquee>
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
                          <option value={rank} onChange={handleSubmit}>
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
                          <option value={rank} onChange={handleSubmit}>
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
                  disabled={
                    !flag ||
                    today.toString().split(" ")[0] === "Thu" ||
                    today.toString().split(" ").slice(0, 4).join(" ") ===
                      stockDate.toString().split(" ").slice(0, 4).join(" ")
                  }
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
                    !flag ||
                    tomorrow.toString().split(" ")[0] === "Thu" ||
                    tomorrow.toString().split(" ").slice(0, 4).join(" ") ===
                      stockDate.toString().split(" ").slice(0, 4).join(" ")
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

                      {!isSaturday
                        ? times3.map((time) => {
                            return (
                              <option
                                value={time.value}
                                onChange={handleSubmit}
                              >
                                {time.time}
                              </option>
                            );
                          })
                        : times2.map((time) => {
                            return (
                              <option
                                value={time.value}
                                onChange={handleSubmit}
                              >
                                {time.time}
                              </option>
                            );
                          })}
                    </Form.Select>
                  </InputGroup>
                </Form.Group>
              )}

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
      <Footer label="Copyright 2023. All rights reserved." ></Footer>
    </>
  );
};

export default Details;
