/** @jsxImportSource theme-ui */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useUserAuth } from "../context/UserAuthContext";
import { Box } from "theme-ui";
import Navbar from "./Navbar";
import Footer from "./footer";

const PhoneSignUp = () => {
  const [error, setError] = useState("");
  const [number, setNumber] = useState("");
  const [flag, setFlag] = useState(false);
  const [otp, setOtp] = useState("");
  const [result, setResult] = useState("");
  const { setUpRecaptha } = useUserAuth();
  const navigate = useNavigate();

  const getOtp = async (e) => {
    e.preventDefault();
    setError("");
    if (number === "" || number === undefined )
      return setError("Please enter a valid phone number!");
    try {
      const response = await setUpRecaptha(number);
      setResult(response);
      setFlag(true);
    } catch (err) {
      if (err.message === "Firebase: Error (auth/argument-error).")
        setError("");
      else setError(err.message);
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    setError("");
    if (otp === "" || otp === null) return;
    try {
      await result.confirm(otp);
      navigate("/details");
    } catch (err) {
      if (err.message === "Firebase: Error (auth/argument-error).")
        setError("");
      else setError(err.message);
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "blue",
          height: "100vh",
          flex: 1,
          width: "100%",
        }}
      >
        <Navbar label="LOGIN" />
        <Box
          sx={{
            alignSelf: "center",
            justifyContent: "center",
            width: ["80%", "60%", "50%", "33%"],
            flex: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <img src="../Canteenlogo.png" alt="Canteen Logo" />
          <h2 style={{ color: "white", paddingBottom: 20 }}>Sign In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={getOtp} style={{ display: !flag ? "block" : "none" }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <PhoneInput
                defaultCountry="IN"
                value={number}
                onChange={setNumber}
                placeholder="Enter Phone Number"
                countries={["IN"]}
                addInternationalOption={false}
              />
              <div id="recaptcha-container"></div>
            </Form.Group>
            <div className="button-right">
              <Link to="/">
                <Button
                  variant="secondary"
                  style={{ height: 50, borderWidth: 1, borderColor: "white" }}
                >
                  Cancel
                </Button>
              </Link>
              &nbsp;
              <Button
                type="submit"
                variant="success"
                style={{ height: 50, fontWeight: "600", marginLeft: 5 }}
              >
                Send Otp
              </Button>
            </div>
          </Form>
          <Form
            onSubmit={verifyOtp}
            style={{ display: flag ? "block" : "none" }}
          >
            <Form.Group className="mb-3" controlId="formBasicOtp">
              <Form.Control
                type="otp"
                placeholder="Enter OTP"
                onChange={(e) => setOtp(e.target.value)}
              />
            </Form.Group>
            <div className="button-right">
              <Link to="/">
                <Button
                  variant="secondary"
                  style={{ height: 50, borderWidth: 1, borderColor: "white" }}
                >
                  Cancel
                </Button>
              </Link>
              &nbsp;
              <Button
                type="submit"
                variant="success"
                style={{ height: 50, fontWeight: "600", marginLeft: 5 }}
              >
                Verify
              </Button>
            </div>
          </Form>
        </Box>
      </Box>
      <Footer label="Copyright 2023. All rights reserved."></Footer>
    </>
  );
};

export default PhoneSignUp;
