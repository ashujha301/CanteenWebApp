import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./footer";
import { Box, Button, Flex, Text } from "theme-ui";
import { left } from "styled-system";

const Login = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "blue" }}>
        <Navbar label="Canteen Stores Department" />
        <Flex
          style={{
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
            flexDirection: "column",
            height: "100vh",
            overflow: "hidden",
          }}
        >
          <Flex sx={{ flexDirection: "row" }}>
          <img
            
            src="../afslogoeng.png"
            alt="Canteen Logo 1"
            style={{ height: "50%"}}
          />
          <img
            
            src="../afslogohindi.png"
            alt="Canteen Logo 2"
            style={{ height: "50%" , flex: 1}}
          />
          </Flex>
          
          <Flex sx={styles.home}>
            <Flex sx={{ flexDirection: "column", alignItems: "center" }}>
              <Text
                variant="text.mainHeader"
                sx={{
                  paddingBottom: [1, 2, 3, 4],
                  paddingTop: [1, 2, 3, 4],
                  color: "navy",
                  fontFamily: "roboto",
                }}
              >
                Unit Run Canteen
              </Text>

              <Link to="/login">
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
      </Box>
      <Footer label="Copyright 2023. All rights reserved."></Footer>
    </>
  );
};

export default Login;

let styles = {
  home: {
    backgroundColor: "#3C79B4",
    flex: 1,
    flexDirection: "column",
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
