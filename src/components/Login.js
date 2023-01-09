import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./footer";
import { Box, Button, Flex, Text } from "theme-ui";

const Login = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "blue" }}>
        <Navbar label="Canteen Stores Department" />
        <div>
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
                  Unit Run Canteen
                </Text>
                <Flex sx={{ flexDirection: "column" }}>
                  <Text variant="text.h1">1. LOGIN</Text>
                  <Text variant="text.h1">2. CHECK TIME SLOT</Text>
                  <Text variant="text.h1">3. BOOK YOUR SLOT</Text>
                  <Text variant="text.h1">4. GENERATE YOUR E TOKEN</Text>
                </Flex>
                <Link to="/phonesignup">
                  <div>
                    <Button
                      sx={{ variant: "buttons.secondary", mt: 4 }}
                      type="Submit"
                    >
                      Login with Phone
                    </Button>
                  </div>
                </Link>
              </Flex>
            </Flex>
          </Flex>
        </div>
      </Box>
      <Footer label="Copyright 2020. All rights reserved."></Footer>
    </>
  );
};

export default Login;

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
