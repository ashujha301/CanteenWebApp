/** @jsxImportSource theme-ui */
import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Flex, Input } from "theme-ui";
import Navbar from "./Navbar";

function Login() {
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
          <Input type="text" placeholder="Phone Number" />
        </form>
        <NavLink to="/details">
          <Button sx={{ variant: "buttons.secondary", mt: 4 }}>
            Login/SignUp
          </Button>
        </NavLink>
      </Flex>
    </>
  );
}

export default Login;
