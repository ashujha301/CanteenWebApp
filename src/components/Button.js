import React from 'react'

export default function Button({label}) {
  return (
    <button style={styles.btn}>{label}</button>
  )
}

let styles={
    btn:{
        backgroundColor:'#1D213C',
        color:'#FFF',
        height:50,
        width:260,
        borderRadius:5,
        fontSize:22
    }
}