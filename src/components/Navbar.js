import React from "react";
import { Flex } from "theme-ui";

const Navbar = ({ label }) => {
  return (
    <Flex sx={styles.container}>
      <text style={styles.header}>{label}</text>
    </Flex>
  );
};

export default Navbar;

let styles = {
  container: {
    backgroundColor: "#1D213C",
    height: 100,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: [3, 2, 0, 0],
  },
  header: {
    color: "white",
    fontSize: 40,
    fontWeight: 600,
  },
};
