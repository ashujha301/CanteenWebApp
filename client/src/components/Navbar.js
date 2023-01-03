import React from 'react'

const Navbar = () => {
  return (
    <div style={styles.container}>
    <text style={styles.header}>Canteen Stores Department</text>
    </div>
  )
}

export default Navbar;

let styles = {
  container: {
    backgroundColor: '#1D213C',
    height: 100,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  header:{
    color: 'white',
    fontSize: 40,
    fontWeight: 600,
  },
}