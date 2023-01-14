import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
// import { db } from "../firebase";

// import { getDoc, doc } from "firebase/firestore";

const Home = () => {
  const { logOut } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  // const getBook = (id) => {
  //   const bookDoc = doc(db, "Canteen_Slots", id);
  //   return getDoc(bookDoc);
  // };
  // console.log(getBook())
  return (
    <>
      <div className="p-4 box mt-3 text-center">
        Thank You <br />
      </div>
      <div className="d-grid gap-2">
        <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>
      </div>
    </>
  );
};

export default Home;
