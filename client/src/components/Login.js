/** @jsxImportSource theme-ui */
import React from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";

function Login() {
  return (
    <div style={styles.home}>
      <img src="../Canteenlogo.png" alt="Canteen Logo" />
      <form>
        <label>Phone Number</label>
        <input type="text"/>
      </form>
      <Button label="Login" />
      <div sx={{ backgroundColor: "lightBlue", height: 100,mt:2 }} />
      <h1
      sx={{
        color: 'lightBlue',
      }}>
      Hello
    </h1>
    </div>
  );
}

export default Login;

let styles = {
  home: {
    backgroundColor: "#3C79B4",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
  },
};
