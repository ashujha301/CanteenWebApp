/** @jsxImportSource theme-ui */
import React from "react";
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
        }}
      >
        <img src="../Canteenlogo.png" alt="Canteen Logo" />
        <form>
          <Input type="text" placeholder="Phone Number" />
        </form>
        <Button sx={{ variant: "buttons.secondary", mt: 4 }}>
          Login/SignUp
        </Button>
      </Flex>
    </>
  );
}

export default Login;
