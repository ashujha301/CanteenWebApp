import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { Box, Flex } from "theme-ui";
import { useUserAuth } from "../context/UserAuthContext";

const Home = () => {
  const token = localStorage.getItem("token");
  const time = localStorage.getItem("time");
  const date = localStorage.getItem("date");
  const { logOut } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
      localStorage.removeItem("token");
      localStorage.removeItem("time");
      localStorage.removeItem("date");
    } catch (error) {
      console.log(error.message);
    }
  };
  const getTimeSlot = (time1) => {
    const time2 = time1 + 1;
    if (time1 < 16) {
      return `${time1}:00 - ${time2}:00`;
    } else {
      return `${time1}:00 - ${time1}:30`;
    }
  };

  return (
    <Box sx={{ backgroundColor: "lightBlue", height: "100vh", flex: 1 }}>
      <div
        className="p-4 pt-5 text-center"
        style={{ backgroundColor: "#1D213C" }}
      >
        <h1 style={{ color: "white" }}>Thank You </h1>
      </div>
      <div className="d-grid gap-2 mt-5 text-center">
        <h2 className="blink">
          Take Screenshot to show this Token for Reference
        </h2>
        <h1
          style={{
            fontWeight: "bold",
            color: "green",
            fontFamily: "monospace",
          }}
        >
          Slot booked succesfully!
        </h1>

        <h1>Your Token Number is:</h1>
        <h1
          className="p-4 box pt-4 text-center"
          style={{ fontWeight: "bold", fontFamily: "cursive" }}
        >
          {token}
        </h1>
        <h2
          style={{
            fontWeight: "bold",
            color: "green",
            fontFamily: "monospace",
          }}
        >
          Please Adhere to Time Slot
        </h2>
        <h1>Your time slot is:</h1>
        <Box
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            width: ["80%", "60%", "50%", "30%"],
            margin: "auto",
            borderRadius: "10px",
          }}
        >
          <h2 style={{ fontWeight: "bold", fontFamily: "monospace" }}>
            {new Date(date).toDateString()}
            <br />
            {getTimeSlot(Number(time))}
          </h2>
        </Box>
      </div>
      <div className="d-grid gap-2" style={{ justifyContent: "center" }}>
        <Button
          size="lg"
          className="mt-3"
          variant="danger"
          onClick={handleLogout}
        >
          Log out
        </Button>
      </div>
    </Box>
  );
};

export default Home;
