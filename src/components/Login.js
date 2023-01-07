/** @jsxImportSource theme-ui */
import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Flex, Input } from "theme-ui";
import Navbar from "./Navbar";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function Login({ mobile, setMobile, onSignInSubmit }) {
  console.log("mobile", mobile);
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
        <form
          onSubmit={() => {
            onSignInSubmit();
          }}
        >
          <Flex>
            <div id="sign-in-button"></div>
            <PhoneInput
              country={"in"}
              value={mobile}
              onChange={(e) => {
                setMobile(e);
              }}
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
                height: 50,
                width: 400,
              }}
            />
          </Flex>
          <Button sx={{ variant: "buttons.secondary", mt: 4 }} type="submit">
            Login/SignUp
          </Button>
        </form>
      </Flex>
    </>
  );
}

export default Login;
