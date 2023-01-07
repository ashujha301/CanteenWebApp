import Maincomp from "./components/Maincomp";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import Details from "./components/Details";
import Otp from "./components/Otp";
import firebaseNew from "./firebase";
import { useState } from "react";

function App() {
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   this.setState({
  //     [name]: value,
  //   });
  // };
  const configureCaptcha = () => {
    window.recaptchaVerifier = new firebaseNew.auth.RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          onSignInSubmit();
          console.log("Recaptca varified,response: ", response);
        },
        defaultCountry: "IN",
      }
    );
  };
  const onSignInSubmit = (e) => {
  console.log("mobile", mobile);
    console.log("came here")
    e.preventDefault();
    configureCaptcha();
    const phoneNumber = mobile;
    console.log(phoneNumber);
    const appVerifier = window.recaptchaVerifier;
    firebaseNew
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        console.log("OTP has been sent");
        // ...
      })
      .catch((error) => {
        // Error; SMS not sent
        // ...
        console.log("SMS not sent", error);
      });
  };
  const onSubmitOTP = (e) => {
    e.preventDefault();
    const code = otp;
    console.log(code);
    window.confirmationResult
      .confirm(code)
      .then((result) => {
        // User signed in successfully.
        const user = result.user;
        console.log(JSON.stringify(user));
        alert("User is verified");
        // ...
      })
      .catch((error) => {
        // User couldn't sign in (bad verification code?)
        // ...
        console.log(error)
      });
  };
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Maincomp />} />
        <Route
          path="/login"
          element={
            <Login
              mobile={mobile}
              setMobile={setMobile}
              onSubmit={onSignInSubmit}
            />
          }
        />
        <Route
          path="/Otp"
          element={<Otp otp={otp} setOtp={setOtp} onSubmitOTP={onSubmitOTP} />}
        />
        <Route path="/details" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
