import React from "react";
// import Button from "./Button";
import { NavLink } from "react-router-dom";
import { Text, Flex, Button } from "theme-ui";
import Navbar from "./Navbar";

const Maincomp = () => {
  return (
    <>
      <Navbar label="Canteen Stores Department" />
      <Flex sx={styles.home}>
        <Flex sx={styles.row}>
          <img
            src="../Canteenlogo.png"
            alt="Canteen Logo"
            style={{ height: "50%" }}
          />
          <Flex sx={{ flexDirection: "column", alignItems: "center" }}>
            <Text
              variant="text.mainHeader"
              sx={{ paddingBottom: [1, 2, 3, 4], paddingTop: [1, 2, 3, 4] }}
            >
              Unit Run Canteen Prayagraj
            </Text>
            <Flex sx={{ flexDirection: "column" }}>
              <Text variant="text.h1">1. LOGIN</Text>
              <Text variant="text.h1">2. CHECK TIME SLOT</Text>
              <Text variant="text.h1">3. GENERATE YOUR E TOKEN</Text>
              <Text variant="text.h1">4. BOOK YOUR SLOT</Text>
              <NavLink to="/login">
                <Button sx={{ variant: "buttons.primary", mt: 4 }}>
                  LOGIN
                </Button>
              </NavLink>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Maincomp;

let styles = {
  home: {
    backgroundColor: "#3C79B4",
    height: "100vh",
    flex: 1,
    overflow: "hidden",
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
