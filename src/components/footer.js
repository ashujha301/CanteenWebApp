import React from 'react';
import { Flex } from 'theme-ui';

const Footer = ({label}) => {
  return (
    
      <Flex sx={ styles.container }>
        <text style={styles.footer}>{label}</text>
      </Flex>
   
  );
}

export default Footer;

let styles = {
    container: {
      backgroundColor: "#1D213C",
      height: 30,
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      paddingLeft: [3, 2, 0, 0],
    },
    footer: {
        color: "white",
        fontSize: 20,
        fontWeight: 600,
      },
}
