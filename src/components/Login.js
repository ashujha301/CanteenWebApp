import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./footer";
import { Box, Button, Flex, Text, Image } from "theme-ui";
import { alpha } from "@theme-ui/color";

const Login = () => {
  const height = window.innerHeight;
  return (
    <>
      <Box
        sx={{
          backgroundImage: (t) => `
          linear-gradient(
          to bottom,
          ${alpha("grad", 1)(t)},
          ${alpha("navy", 1)(t)}
          )
          `,
        }}
      >
        <Navbar label="AF Canteen Bamrauli" />
        <Flex
          style={{
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
            flexDirection: "column",
            minHeight: height > 800 ? "86vh" : 800,
          }}
        >
          <Flex
            sx={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              paddingTop: [60, 40, 30, 20],
            }}
          >
            <Image
              src="../afslogoeng.png"
              alt="Canteen Logo 1"
              sx={{ height: [250, 350, 350, 400], flex: 1 }}
            />
            <Image
              src="../afslogohindi.png"
              alt="Canteen Logo 2"
              sx={{ height: [250, 350, 350, 400], flex: 1 }}
            />
          </Flex>

          <Flex sx={styles.home}>
            <Flex sx={{ flexDirection: "column", alignItems: "center" }}>
              <Text
                variant="text.mainHeader"
                sx={{
                  paddingBottom: [1, 2, 3, 4],
                  paddingTop: [1, 2, 3, 4],
                  color: "lightBlue",
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
