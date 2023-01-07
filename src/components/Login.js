/** @jsxImportSource theme-ui */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button, Flex, Input } from "theme-ui";
import Navbar from "./Navbar";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function Login() {
  const [phone, setPhone] = useState("");
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
        <Flex>
          <PhoneInput
            country={"in"}
            value={phone}
            onChange={setPhone}
            onlyCountries={["in"]}
            inputProps={{
              name: "phone",
              required: true,
              autoFocus: true,
            }}
            placeholder="Enter phone number"
            inputStyle={{
              fontSize: 22,
              fontWeight: "semiBold",
              fontFamily: "Roboto",
              height:50,
              width: 400,
            }}
          />
        </Flex>
        <NavLink to="/Otp">
          <Button sx={{ variant: "buttons.secondary", mt: 4 }}>
            Login/SignUp
          </Button>
        </NavLink>
      </Flex>
    </>
  );
}

export default Login;
