/** @jsxImportSource theme-ui */
import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Flex, Input } from "theme-ui";
import Navbar from "./Navbar";
import OTPInput, { ResendOTP } from "otp-input-react";

function Otp({ otp, setOtp, onSubmitOTP }) {
  return (
    <>
      <Navbar label="LOGIN" />
      <Flex
        sx={{
          flexDirection: "column",
          backgroundColor: "blue",
          flex: 1,
          alignItems: "center",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <img src="../Canteenlogo.png" alt="Canteen Logo" />
        <form onSubmit={onSubmitOTP}>
          <OTPInput
            value={otp}
            onChange={setOtp(otp)}
            autoFocus
            OTPLength={6}
            otpType="number"
            disabled={false}
            inputStyles={{
              height: 50,
              width: 60,
              fontSize: 22,
              fontWeight: "semiBold",
              fontFamily: "Roboto",
              marginBottom: 20,
            }}
          />
          <ResendOTP onResendClick={() => console.log("Resend clicked")} />
          <NavLink to="/details">
            <Button sx={{ variant: "buttons.secondary", mt: 4 }} type="submit">
              Verify OTP
            </Button>
          </NavLink>
        </form>
      </Flex>
    </>
  );
}

export default Otp;
