export const theme = {
  breakpoints: ["0px", "768px", "1024px", "1192px"],
  fontSizes: [14, 15, 16, 18, 24, 32, 60],
  fontWeight: {
    regular: 400,
    normal: 500,
    semiBold: 600,
  },
  fontFamily: "Roboto",

  theme: {
    colors: {
      navy: "#1D213C",
      blue: "#3C79B4",
      lightBlue: "#BAE2EE",
      black: "#252525",
      white: "#FFF",
      grey: "rgba(0, 0, 0, 0.47)",
      red: "red",
    },
    layout: {
      lineHeight: ["20px", "20px", "24px", "24px"],
      fontWeight: "semiBold",
    },
    buttons: {
      primary: {
        bg: "navy",
        color: "white",
        height: 50,
        width: 260,
        borderRadius: 5,
        fontSize: 22,
      },
      secondary: {
        bg: "lightBlue",
        color: "navy",
        height: 50,
        width: 260,
        borderRadius: 5,
        fontSize: 22,
        fontFamily: "Roboto",
        fontWeight: "bold",
      },
    },
  },
  forms: {
    input: {
      height: 50,
      width: [300, 300, 400, 476],
      borderRadius: 5,
      fontSize: 22,
      fontFamily: "Roboto",
      fontWeight: "bold",
      borderColor: "white",
      backgroundColor: "white",
    },
  },
  text: {
    mainHeader: {
      fontSize: ["35px", "45px", "60px", "60px"],
      fontWeight: 600,
      lineHeight: ["60px", "60px", "72px", "72px"],
    },
    subHeader: {
      fontSize: ["24px", "24px", "40px", "40px"],
      fontWeight: 600,
      lineHeight: ["42px", "42px", "54px", "54px"],
    },
    h1: {
      fontSize: ["24px", "30px", "32px", "32px"],
      fontWeight: 500,
      lineHeight: ["25px", "34px", "44px", "44px"],
    },
    h2: {
      lineHeight: ["29px", "29px", "36px", "36px"],
      fontSize: ["16px", "20px", "24px", "24px"],
    },
  },
};
