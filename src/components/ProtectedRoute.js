import { useEffect, useState } from "react";
import { useUserAuth } from "../context/UserAuthContext";
import { useNavigate } from "react-router-dom";
import BookDataService from "../services/book.services";

const ProtectedRoute = ({ children }) => {
  const { user } = useUserAuth();
  const navigate = useNavigate();

  const [phoneNumber, setPhoneNumber] = useState("");
  useEffect(() => {
    const getBookData = async (id) => {
      const data = await BookDataService.getPhone(id);
      setPhoneNumber(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getBookData("admin_login_number");
  }, []);
  useEffect(() => {
    if (phoneNumber[0]?.phone && user?.phoneNumber === phoneNumber[0]?.phone) {
      navigate("/slotlist");
    }
  }, [user, navigate, phoneNumber]);

  useEffect(() => {
    if (!user) {
      navigate("/", { replace: true });
    }
  }, [user, navigate]);

  return user ? children : null;
};

export const AdminProtectedRoute = ({ children }) => {
  const { user } = useUserAuth();
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  useEffect(() => {
    const getBookData = async (id) => {
      const data = await BookDataService.getPhone(id);
      setPhoneNumber(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getBookData("admin_login_number");
  
  }, []);

  useEffect(() => {
    if (phoneNumber[0]?.phone && user?.phoneNumber !== phoneNumber[0]?.phone) {
      navigate("/", { replace: true });
    }
  }, [user, navigate, phoneNumber]);

  return user ? children : null;
};
export default ProtectedRoute;
