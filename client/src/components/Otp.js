/** @jsxImportSource theme-ui */
import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Flex, Input } from "theme-ui";
import Navbar from "./Navbar";

function Otp() {
  return (
    <>
      <Navbar label="LOGIN" />
      <Flex
        sx={{
          flexDirection: "column",
          backgroundColor: "blue",
          flex: 1,
          alignItems: "center",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <img src="../Canteenlogo.png" alt="Canteen Logo" />
        <form>
          <Input type="text" placeholder="Enter One Time Password" />
        </form>
        <NavLink to="/details">
          <Button sx={{ variant: "buttons.secondary", mt: 4 }}>
            Enter OTP
          </Button>
        </NavLink>
      </Flex>
    </>
  );
}

export default Otp;
