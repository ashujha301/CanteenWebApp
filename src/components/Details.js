import React from "react";
// import { NavLink } from "react-router-dom";
import { Button, Flex, Input, Label, Text } from "theme-ui";
import Navbar from "./Navbar";

function Details() {
  return (
    <>
      <Navbar label="DETAILS" />
      <Flex sx={styles.home}>
        <Flex sx={styles.row}>
          <img
            src="../Canteenlogo.png"
            alt="Canteen Logo"
            style={{ height: "50%" }}
          />
          <Flex sx={{ flexDirection: "column", alignItems: "center" }}>
          <Label>
              Service Number<Text sx={{ color: "red" }}>*</Text>
            </Label>
            <Input type="text" />
            <Label>
              Rank<Text sx={{ color: "red" }}>*</Text>
            </Label>
            <Input type="text" />
            <Label>
              First Name<Text sx={{ color: "red" }}>*</Text>
            </Label>
            <Input type="text" />
            <Label>Middle Name</Label>
            <Input type="text" />
            <Label>
              Last Name<Text sx={{ color: "red" }}>*</Text>
            </Label>
            <Input type="text" />
            <Button sx={{ variant: "buttons.secondary", mt: 5, mb: 6 }}>
              Continue
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default Details;

let styles = {
  home: {
    backgroundColor: "blue",
    height: ["120%", "100%", "100vh", "100vh"],
    flex: 1,
    overflow:'hidden'
  },
  row: {
    flexDirection: "row",
    display: "flex",
    color: "white",
    justifyContent: "space-evenly",
    flex: 1,
    flexWrap: "wrap",
    paddingLeft: [3, 2, 0, 0],
  },
};
