import React from "react";
// import Button from "./Button";
import { NavLink } from "react-router-dom";
import {Text,Flex,Button} from 'theme-ui';

const Maincomp = () => {
  return (
    <div style={styles.home}>
      <div style={styles.row}>
        <img src="../Canteenlogo.png" alt="Canteen Logo" />
        <Flex sx={{flexDirection:'column'}}>
          <Text variant="text.mainHeader" sx={{paddingBottom:4,paddingTop:5}}>Unit Run Canteen Prayagraj</Text>
          <Text variant="text.h1">1. LOGIN</Text>
          <Text variant="text.h1">2. CHECK TIME SLOT</Text>
          <Text variant="text.h1">3. GENERATE YOUR E TOKEN</Text>
          <Text variant="text.h1">4. BOOK YOUR SLOT</Text>
          <NavLink to="/login">
            <Button variant="buttonsprimary">Login</Button>
          </NavLink>
          
        </Flex>
      </div>
      
    </div>
  );
};

export default Maincomp;

let styles = {
  home: {
    backgroundColor: "#3C79B4",
    height: "100vh",
  },
  row: {
    flexDirection: "row",
    display: "flex",
    color: "white",
    justifyContent:'space-evenly',
    flex:1,
    flexWrap:'wrap'
  },
};
